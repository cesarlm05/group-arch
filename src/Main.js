import { ItemCart } from "./ItemCart";

export function Main() {
  const onAdd = (quantity) => {
    console.log("Compraste " + quantity + " unidades");
  };

  return (
    <>
      <ItemCart initial={0} stock={10} onAdd={onAdd} />
    </>
  );
}

export default Main;
