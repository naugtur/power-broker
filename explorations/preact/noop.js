import { options } from "preact";

// TODO: find a way to thread it into LavaMoat nicely
globalThis.domPowers = {
  claim: (a, p) => p,
};

// Set our own options hook
options.vnode = (vnode) => {
  // Call previously defined hook if there was any
  // I don't think I want that unless it's where react compatibility is built \_o_/
  if (prevVnode) {
    prevVnode(vnode);
  }

  if (vnode.ref) {
    console.log("wrap", vnode.ref);
    vnode.ref = new Proxy(vnode.ref, {
      // log all operations on the target
      get: function (target, prop, receiver) {
        console.log("get", prop);
        return Reflect.get(target, prop, receiver);
      },
      set: function (target, prop, value, receiver) {
        console.log("set", prop, value);
        return Reflect.set(target, prop, value, receiver);
      },
      apply: function (target, thisArg, argumentsList) {
        console.log("apply", argumentsList);
        return Reflect.apply(target, thisArg, argumentsList);
      },
    });
  }
};
