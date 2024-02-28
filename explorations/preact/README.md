# Preact + lavamoat + power-broker

## Explanation

We're looking at a simple app with a bunch of components. The setup uses webpack to build and the LavaMoat plugin to control powers available to dependencies.
There are 3 dependencies, all installed from the same tarball but under different names and included in the page independently. Each of them is already processed to not contain the JSX syntax and has domPowers included manually. (in the future introducing domPowers can be automated with a simple transform and minor changes to the `h` function)

DOM acces powers are brokered to only be available if a mandate to use them is awarded to a package via policy (see ./lavamoat/policy-override.json).
As a result, the 3 copies of the component have varying access to DOM


## Running the demo
```
npm ci
npm start
```

## Technicalities

- hardenpreact.js contains all the instrumentation necessary for Preact to use power-broker for exposing dom access to components.
- the script at the top of index.html is polyfilling for the missing support for writing globals from compartments in current lavamoat webpack plugin version
- `this.base` reference in components will need a different solution

## Notes on security

- `h` function and jsx transforms can only be altered for compatibility, but not provide security guarantees. We need to consider that a reference the app uses as a componen may not be using the `h` function at all and providing a malicious object instead
- it's possible that Preact itself would require more manual hardening to prevent its internals from being abused to escape confinement.
- for the final solution an audit of Preact might be necessary. Considering how terse the implementation is, it should be feasible.
- Further research into possibility and consequences of obtaining a reference to a different component is necessary. The claiming mechanism should prevent most risks of stealing other component's DOM references by components lacking DOM access.
- Nothing can be done about a claimed reference being passed around if we want to keep using components from the ecosystem that are unaware of the broker. 
- If broker is only used explicitly and all UI is written with awareness of it, we could require a mechanism similar to claiming for every operation on the reference so that passing around claimed values is impossible (effectively a membrane)