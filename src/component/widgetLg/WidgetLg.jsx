import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import "./WidgetLg.css";
// import { format } from "timeago.js";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      const getOrders = async () => {
          try {
              const res = await userRequest.get("orders");
              setOrders(res.data);                
          } catch (error) {}
      };
      getOrders();    
  }, []);

  const Button = ({type}) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest Transactions</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customor</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetlgtr">
            <td className="widgetlguser">
              <span className="widgetlgname">{order.userId}</span>
            </td>
            <td className="widgetlgdate">{order.createdAt}</td>
            <td className="widgetlgamount">${order.amount}</td>
            <td className="widgetlgdate">
              <Button type={order.status} />
            </td>
          </tr> 
        ))}
      </table>
    </div>
  )
}
