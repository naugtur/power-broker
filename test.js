import "ses";
import { createBroker, broker, claim } from "./index.js";

lockdown();

const domPowers = createBroker({
  // mandates to use the power in specific ways
  // These are implemented as composable attenuations (need to return property descriptors that will be defined on an empty object)
  CSS: (domnode) => {
    return { style: { value: domnode.style } };
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

//================================================
// Make domPowers and claim a global under LavaMoat
// so that you can select what to allow.
// Introduce a modification to jsx processing to wrap DOM references in `claim`
// "globals": {
//     "claim": true,
//     "domPowers.CSS": true
//     "domPowers.INPUTS": true
// }
//================================================

// enough to emulate the DOM ref passing to components in UI code
const sharedProps = {};

// Think: ReactDOM etc.
const renderingLibraryCompartment = new Compartment({
  broker,
  sharedProps,
  assert,
});
renderingLibraryCompartment.evaluate(`
globalThis.domnode = {
  style: {display: "block" },
  value: "hello",
  ownerDocument: { window: globalThis }
}
const domRef = broker(domnode);
sharedProps.domRef = domRef;
assert(domnode.style.display === "block");
`);

// Think: react component
const componentCompartment = new Compartment({
  //domPowers only has the keys that policy allows
  domPowers: {
    CSS: domPowers.CSS,
  },
  claim,
  sharedProps,
  assert,
});
componentCompartment.evaluate(`
const domRef = sharedProps.domRef;
const allDomWeGet = claim(globalThis.domPowers, domRef); 
assert(Object.getOwnPropertyNames(allDomWeGet).join() === "style");
allDomWeGet.style.display = "none";
assert(allDomWeGet.ownerDocument === undefined);
`);

// The DOM update works
renderingLibraryCompartment.evaluate(`
assert(domnode.style.display === "none");
`);

const otherComponentCompartment = new Compartment({
  //domPowers were not allowed by policy
  claim,
  sharedProps,
  assert,
});

try {
  otherComponentCompartment.evaluate(`
const domRef = sharedProps.domRef;
const allDomWeGet = claim(globalThis.domPowers, domRef); 
assert(Object.getOwnPropertyNames(allDomWeGet).length === 0);
allDomWeGet.style.display = "none";
`);
} catch (e) {
  assert(e.message === "You do not have the mandate to claim this power.");
}
