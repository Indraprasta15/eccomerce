import "./Sidebar.css";
import { 
    AttachMoneyOutlined, ChatBubbleOutline, DynamicFeed,
    EqualizerOutlined, LineStyle, MailOutline, PermIdentity,
    Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrap">
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to="/" className="link">
                        <li className="sidebarlistitem active">
                            <LineStyle className="sidebaritem" /> Home
                        </li>
                    </Link>
                    <li className="sidebarlistitem">
                        <Timeline className="sidebaritem" /> Analytics
                    </li>
                    <li className="sidebarlistitem">
                        <TrendingUp className="sidebaritem" /> Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarlist">
                    <Link to="/users" className="link">
                        <li className="sidebarlistitem">
                            <PermIdentity className="sidebaritem" /> Users
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarlistitem">
                            <Storefront className="sidebaritem" /> Products
                        </li>
                    </Link>
                    <li className="sidebarlistitem">
                        <AttachMoneyOutlined className="sidebaritem" /> Transactions
                    </li>
                    <li className="sidebarlistitem">
                        <EqualizerOutlined className="sidebaritem" /> Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <MailOutline className="sidebaritem" /> Mail
                    </li>
                    <li className="sidebarlistitem">
                        <DynamicFeed className="sidebaritem" /> Feedback
                    </li>
                    <li className="sidebarlistitem">
                        <ChatBubbleOutline className="sidebaritem" /> Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <WorkOutline className="sidebaritem" /> Manage
                    </li>
                    <li className="sidebarlistitem">
                        <Timeline className="sidebaritem" /> Analytics
                    </li>
                    <li className="sidebarlistitem">
                        <Report className="sidebaritem" /> Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
