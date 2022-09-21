function Main() {
  const stock = 35;
    function count(){
        return stock
    }

  return (
    <section className="counter">
      <div className="buttons">
        <button className="btnAdd">+</button>
            <span className="count"> {count()} </span>
        <button className="btnRes">-</button>
      </div>
    </section>
  );
}

export default Main;
