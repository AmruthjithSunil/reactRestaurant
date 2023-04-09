import { useEffect, useState } from "react";

export default function OrderTables(props) {
  const [orders, setOrders] = useState(props.orders);

  useEffect(() => {
    setOrders(props.orders);
  }, [props.orders]);

  function table(number) {
    return orders
      .filter((order) => order.table === number)
      .map((order) => (
        <li key={order.id}>
          {order.price}-table{order.table}-{order.dish}
          <button>Delete Order</button>
        </li>
      ));
  }

  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <ul>{table(1)}</ul>
      <h2>Table 2</h2>
      <ul>{table(2)}</ul>
      <h2>Table 3</h2>
      <ul>{table(3)}</ul>
    </div>
  );
}
