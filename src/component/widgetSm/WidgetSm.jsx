import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./WidgetSm.css";

export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);                
            } catch (error) {}
        };
        getUsers();    
    }, []);
  return (
    <div className="widgetsm">
        <span className="widgetsmtitle">New Join Members</span>
        <ul className="widgetsmlist">
            {users.map((user) => (
                <li className="widgetsmlistitem" key={user._id}>
                    <img 
                        src={
                            user.img || 
                            "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png" 
                        } 
                        alt="pp" 
                        className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmname">{user.username}</span>
                    </div>
                    <button className="widgetsmbutton">
                        <Visibility className="widgetsmicon"/>
                        Display
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
