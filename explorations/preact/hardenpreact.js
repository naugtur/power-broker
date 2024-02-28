import { broker, createBroker } from "../../index.js";
import { options } from "preact";

const domPowersBroker = createBroker({
  // mandates to use the power in specific ways
  // These are implemented as composable attenuations (need to return property descriptors that will be defined on an empty object)
  CSS: (domnode) => {
    return { style: { get: () => domnode.style } };
  },
  INPUTS: (domnode) => {
    return {
      value: {
        get: () => domnode.value,
        set: (value) => (domnode.value = value),
      },
    };
  },
});

// TODO: find a way to thread it into LavaMoat nicely
globalThis.domPowers = domPowersBroker;

// Store previous hook
const { vnode: prevVnode, event: prevEvent } = options;

const debug = () => {};
const log = console.log;

// const debug = console.log;
// const log = console.log;

const knownWrapped = new WeakSet();
const wrapValueInBroker = (original, key, target) => {
  if (knownWrapped.has(original)) {
    return original;
  }
  if (!target) {
    target = original;
  }
  let deal;
  Object.defineProperty(target, key, {
    configurable: false,
    get: () => {
      log("getting", key);
      return deal;
    },
    set: (value) => {
      log("setting", key, value);
      deal = broker(value);
      if (original !== target) original[key] = deal;
    },
  });
  knownWrapped.add(target);
  return target;
};

// WARNING: this is not early enough.
// Would be better to contribute a hook/option to preact instead
// to capture the assignment here:
// https://github.com/preactjs/preact/blob/c3160cc9bbc988b88c876517db113360b4fb81f6/src/diff/index.js#L256
options.diffed = (vnode) => {
  if (vnode?.__?.__c) {
    wrapValueInBroker(vnode.__.__c, "base");
  }
};
// Set our own options hook
options.vnode = (vnode) => {
  // Call previously defined hook if there was any
  // I don't think I want that unless it's where react compatibility is built \_o_/
  if (prevVnode) {
    prevVnode(vnode);
  }

  if (vnode.props.dangerouslySetInnerHTML) {
    log("dangerouslySetInnerHTML", vnode.props.dangerouslySetInnerHTML);
    delete vnode.props.dangerouslySetInnerHTML;
  }

  debug("wrapVNode", vnode);
  if (vnode.ref) {
    log("vnode.ref", vnode.ref, typeof vnode.ref);
    // TODO: support function refs too
    vnode.ref = wrapValueInBroker(vnode.ref, "current", {});
  }
};

options.event = (e) => {
  if (prevEvent) {
    e = prevEvent(e);
  }
  debug("wrapEvent", e);
  // TODO: figure out how to know what to wrap. There's plenty of work left here.
  return {
    type: e.type,
    target: broker(e.target),
  };
};
