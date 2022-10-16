import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() =>[
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ], []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev, {name: MONTHS[item._id - 1], "Active User": item.total}
          ])
        );
      } catch (error) {}
    }
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homewidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
};