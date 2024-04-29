import Item from "./Item"

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((produ) => (
      <Item key={produ.id} item={produ}/>
      ))}
    </>
  );
};

export default ItemList;