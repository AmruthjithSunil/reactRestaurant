export default function OrderForm({ addOrder }) {
  function clickHandler(e) {
    e.preventDefault();
    const order = {
      id: id.value,
      price: price.value,
      dish: dish.value,
      table: table.value,
    };
    addOrder(order);
  }

  return (
    <div>
      <form>
        <label htmlFor="id">Unique Order Id:</label>
        <br />
        <input type="number" id="id" name="id" />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input type="number" id="price" name="price" />
        <br />
        <label htmlFor="dish">Choose Dish:</label>
        <br />
        <input type="text" id="dish" name="dish" />
        <br />
        <label htmlFor="cars">Choose a Table:</label>
        <select name="table" id="table">
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
        <br />
        <button onClick={clickHandler}>Add to bill</button>
      </form>
    </div>
  );
}
