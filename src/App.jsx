import { useEffect, useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderTables from "./components/OrderTables";

export default function App() {
  let initOrders;
  if (
    localStorage.getItem("orders") == "" ||
    localStorage.getItem("orders") == null
  ) {
    initOrders = [];
  } else {
    initOrders = JSON.parse(localStorage.getItem("orders"));
  }
  const [orders, setOrders] = useState(initOrders);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  function addOrder(order) {
    setOrders((orders) => [...orders, order]);
  }

  function deleteHandler(e) {
    setOrders((orders) => orders.filter((order) => order.id != e.target.id));
  }

  return (
    <>
      <OrderForm addOrder={addOrder} />
      <OrderTables orders={orders} deleteHandler={deleteHandler} />
    </>
  );
}
