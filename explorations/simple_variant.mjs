const { create, freeze } = Object;
const Proxy = globalThis.Proxy;
const WeakMap = globalThis.WeakMap;
const { get, set } = WeakMap.prototype;
const bind = Function.prototype.bind;
const uncurriedBind = bind.bind(bind);

function createCovenant() {
  const refuse = () => {
    throw Error("You do not have the mandate to access this reference.");
  };
  return new Proxy(create(null), {
    get: refuse,
    set: refuse,
    apply: refuse,
    construct: refuse,
  });
}

export const createBroker = (mandates) => {
  const powers = new WeakMap();
  const powersSet = uncurriedBind(set, powers);
  const powersGet = uncurriedBind(get, powers);

  const enact = (attenuationFromMandate) => (covenant) => {
    const power = powersGet(covenant);
    return attenuationFromMandate(power);
  };

  const broker = create(null);
  broker.broker = (power) => {
    const covenant = createCovenant();
    powersSet(covenant, power);
    return covenant;
  };

  for (const mandate in mandates) {
    broker[mandate] = freeze(enact(mandates[mandate]));
  }
  return freeze(broker);
};


// ==================================================
// Usage 
// import { createBroker } from "power-broker";
// globalThis.domPowers = createBroker({
//   // mandates to use the power in specific ways
//   CSS: (domnode) => {
//     return { style: domnode.style };
//   },
//   INPUTS: (domnode) => {
//     return { value: domnode.value };
//   },
// });

// // make domPowers a global under LavaMoat and then:
// // "globals": {
// //     "domPowers.CSS": true
// //     "domPowers.INPUTS": true
// // }

// {
//   // This one is the nicest, but it doesn't allow composing mandates
//   // and usage requires knowing mandate names :(
//   const covenant = domPowers.broker(domnode);
//   domPowers.CSS(covenant);
// }