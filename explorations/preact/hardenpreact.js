import "ses";

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

// pretend LavaMoat
globalThis.domPowers = {
  CSS: domPowersBroker.CSS,
  INPUTS: domPowersBroker.INPUTS,
}

// Naive, but this is a demo without lavamoat
lockdown({
  consoleTaming: "unsafe",
  errorTaming: "unsafe",
  overrideTaming: "severe",
});

// Store previous hook
const { vnode: prevVnode, event: prevEvent } = options;

const log = console.log;
const trace = console.trace;

// Set our own options hook
options.vnode = (vnode) => {
  // Call previously defined hook if there was any
  // I don't think I want that unless it's where react compatibility is built \_o_/
  if (prevVnode) {
    prevVnode(vnode);
  }

  log("wrapVNode", vnode);
  if (vnode.ref) {
    log("vnode.ref", vnode.ref, typeof vnode.ref);
    let secretRef, deal;
    // TODO: support function refs too
    Object.defineProperty(vnode.ref, "current", {
      get: () => {
        trace("getting ref", secretRef);
        return deal;
      },
      set: (value) => {
        trace("setting ref", value);
        if (value !== secretRef) {
          secretRef = value; // this is a leak, but I'm only using iit now to observe if I need to worry at all
          deal = broker(value);
        } else {
          trace("re-setting ref", value);
        }
      },
    });
  }
};

options.event = (e) => {
  if (prevEvent) {
    e = prevEvent(e);
  }
  log("wrapEvent", e);
  // TODO: figure out how to know what to wrap. There's plenty of work left here.
  return {
    target: broker(e.target),
  };
};
