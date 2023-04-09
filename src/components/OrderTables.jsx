import { useEffect, useState } from "react";

export default function OrderTables(props) {
  const [orders, setOrders] = useState(props.orders);

  useEffect(() => {
    setOrders(props.orders);
  }, [props.orders]);

  const table1 = orders
    .filter((order) => order.table === 1)
    .map((order) => (
      <li key={order.id}>
        {order.price}-table{order.table}-{order.dish}
        <button>Delete Order</button>
      </li>
    ));

  const table2 = orders
    .filter((order) => order.table === 2)
    .map((order) => (
      <li key={order.id}>
        {order.price}-table{order.table}-{order.dish}
        <button>Delete Order</button>
      </li>
    ));

  const table3 = orders
    .filter((order) => order.table === 3)
    .map((order) => (
      <li key={order.id}>
        {order.price}-table{order.table}-{order.dish}
        <button>Delete Order</button>
      </li>
    ));

  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <ul>{table1}</ul>
      <h2>Table 2</h2>
      <ul>{table2}</ul>
      <h2>Table 3</h2>
      <ul>{table3}</ul>
    </div>
  );
}
