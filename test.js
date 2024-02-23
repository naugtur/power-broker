import { createBroker, broker, claim } from "./index.js";
import "ses";

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

// more readable console
const console = {
  log: (name, what, ...args) => {
    global.console.log(
      name.padEnd(30, " ") + "|",
      what.padEnd(20, " ") + "|",
      ...args
    );
  },
};

// Think: reactDOM 
const renderingLibraryCompartment = new Compartment({
  broker,
  sharedProps,
  console,
});
renderingLibraryCompartment.evaluate(`
globalThis.domnode = {
  style: {display: "block" },
  value: "hello",
  ownerDocument: { window: globalThis }
}
const domRef = broker(domnode);
sharedProps.domRef = domRef;
console.log('renderingLibraryCompartment', 'DOM state initial', domnode.style.display);
`);

// Think: react component
const componentCompartment = new Compartment({
  //domPowers only has the keys that policy allows
  domPowers: {
    CSS: domPowers.CSS,
  },
  claim,
  sharedProps,
  console,
});
componentCompartment.evaluate(`
const domRef = sharedProps.domRef;
const allDomWeGet = claim(globalThis.domPowers, domRef); 
console.log('componentCompartment', 'claim result', Object.getOwnPropertyNames(allDomWeGet));
allDomWeGet.style.display = "none";
console.log('componentCompartment', 'stolen global?', allDomWeGet.ownerDocument);
`);

// The DOM update works
renderingLibraryCompartment.evaluate(`
console.log('renderingLibraryCompartment','DOM state later', domnode.style.display);
`);

const otherComponentCompartment = new Compartment({
  //domPowers were not allowed by policy
  claim,
  sharedProps,
  console,
});

try {
  otherComponentCompartment.evaluate(`
const domRef = sharedProps.domRef;
const allDomWeGet = claim(globalThis.domPowers, domRef); 
console.log('otherComponentCompartment', 'claim result', Object.getOwnPropertyNames(allDomWeGet));
allDomWeGet.style.display = "none";
`);
} catch (e) {
  console.log("otherComponentCompartment", "Error thrown", e.message);
}
