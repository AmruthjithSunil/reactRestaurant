import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderTables from "./components/OrderTables";

export default function App() {
  const [orders, setOrders] = useState([
    { price: 100, table: 1, id: 1, dish: "noodles" },
    { price: 150, table: 3, id: 14, dish: "nooles" },
  ]);

  function addOrder(order) {
    setOrders((orders) => [...orders, order]);
    console.log(orders);
  }

  return (
    <>
      <OrderForm addOrder={addOrder} />
      <OrderTables orders={orders} />
    </>
  );
}
