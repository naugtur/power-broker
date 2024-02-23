// @ts-check
const { defineProperty, defineProperties, create, freeze, assign, values } =
  Object;
const Proxy = globalThis.Proxy;
const WeakMap = globalThis.WeakMap;
const { get, set } = WeakMap.prototype;

// Only one weakmap is ever needed. Creating separate WeakMaps would not improve anything
const store = new WeakMap();
const storeSet = set.bind(store);
const storeGet = get.bind(store);

export const broker = (power) => {
  const deal = createDeal();
  storeSet(deal, power);
  return deal;
};
// claim(broker, deal)
// also considered: uphold(broker, covenant) :)
export const claim = (broker, deal) => {
  if (!broker) {
    return deal; //still no mandate
  }
  const mandateKeys = values(broker);
  const power = storeGet(deal);
  if (power === undefined) {
    // this should not happen. returning the same reference in case it's accidentally an actual useful object
    return deal;
  }
  const goods = create(null);
  for (let i = 0; i < mandateKeys.length; i++) {
    const attenuationFromMandate = storeGet(mandateKeys[i]);
    if (attenuationFromMandate === undefined) continue; // in case of stray keys
    assign(goods, attenuationFromMandate(power));
  }
  return freeze(defineProperties(create(null), goods));
};

export const createBroker = (availableMandates) => {
  const broker = create(null);

  for (const mandate in availableMandates) {
    const key = create(null);
    storeSet(key, availableMandates[mandate]);
    broker[mandate] = key;
  }
  // Not sure if this convenience is needed
  defineProperty(broker, "claim", {
    enumerable: false,
    value: claim,
  });
  return freeze(broker);
};

// An improvement over a null prototype object - at least you know when you try to misuse it.
function createDeal() {
  const refuse = () => {
    throw Error("You do not have the mandate to claim this power.");
  };
  return new Proxy(create(null), {
    get: refuse,
    set: refuse,
    apply: refuse,
    construct: refuse,
  });
}
