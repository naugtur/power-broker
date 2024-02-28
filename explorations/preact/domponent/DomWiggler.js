import { h } from 'preact';
import { useRef } from 'preact/hooks';

const DomWiggler = ({ id }) => {
  const myElement = useRef(null);

  const setColor = (color) => {
    const elm = domPowers.claim(domPowers, myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  };

  const handleBlur = (event) => {
    const target = domPowers.claim(domPowers, event.target);
    const color = target.value;
    setColor(color);
  };

  const handleColor = () => {
    setColor(['red', 'lightblue', 'green', 'yellow', 'orange', 'purple'][Math.floor(Math.random() * 6)]);
  };

  const handleFetch = (e) => {
    const target = domPowers.claim(domPowers, e.target);
    target.ownerDocument.ownerDocument.defaultView.fetch('https://example.com');
  };

  return h("div", null, 
    h("h1", { ref: myElement }, "Component ", id), 
    h("input", { type: "text", onBlur: handleBlur, placeholder: "color" }), 
    h("button", { onClick: handleColor }, "random color"), 
    h("button", { onClick: handleFetch }, "attempt fetch")
  );
};

export default DomWiggler;
