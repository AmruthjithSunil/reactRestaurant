export default function OrderTables({ orders, deleteHandler }) {
  function table(numberText) {
    return orders
      .filter((order) => order.table === numberText)
      .map((order) => (
        <li key={order.id}>
          {order.price}-table{order.table}-{order.dish}
          <button id={order.id} onClick={deleteHandler}>
            Delete Order
          </button>
        </li>
      ));
  }

  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <ul>{table("1")}</ul>
      <h2>Table 2</h2>
      <ul>{table("2")}</ul>
      <h2>Table 3</h2>
      <ul>{table("3")}</ul>
    </div>
  );
}
