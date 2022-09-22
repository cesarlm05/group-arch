import React, { useState, useEffect } from "react";

export function ItemCart({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const res = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <section className="counter">
      <div className="buttons">
        <button className="btnRes" disabled={count <= initial} onClick={res}>
          -
        </button>
        <span className="count"> {count} </span>
        <button className="btnAdd" disabled={count >= stock} onClick={add}>
          +
        </button>
      </div>
      <div className="addCart">
        <button
          className="btnAddCart"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}
