import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./User.css";

export default function User() {
  return (
    <div className="user">
      <div className="usertitlecont">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newUser">
          <button className="useraddbutton">Create</button>
        </Link>
      </div>
      <div className="usercont">
        <div className="usershow">
          <div className="usershowtop">
            <img 
              src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="pp " 
              className="usershowimg" />
              <div className="usershowtoptitle">
                <span className="usershowname">Anna Becker</span>
                <span className="usershowjob">Sofware Engineer</span>
              </div>
          </div>
          <div className="usershowbottom">
            <span className="usershowtitle">Account Details</span>
            <div className="usershowinfo">
              <PermIdentity className="usershowicon" />
              <span className="usershowinfotitle">annabeck99</span>
            </div>
            <div className="usershowinfo">
              <CalendarToday className="usershowicon" />
              <span className="usershowinfotitle">09-09-1999</span>
            </div>
            <span className="usershowtitle">Contact Details</span>
            <div className="usershowinfo">
              <PhoneAndroid className="usershowicon" />
              <span className="usershowinfotitle">+1 123 456 7</span>
            </div>
            <div className="usershowinfo">
              <MailOutline className="usershowicon" />
              <span className="usershowinfotitle">annabeck@email.com</span>
            </div>
            <div className="usershowinfo">
              <LocationSearching className="usershowicon" />
              <span className="usershowinfotitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userupdatetitle">Edit</span>
          <form className="userupdateform">
            <div className="userupdateleft">
              <div className="userupdateitem">
                <label>Username</label>
                <input 
                  type="text" 
                  placeholder="annabeck99" 
                  className="userupdateinput" 
                />
              </div>
              <div className="userupdateitem">
                <label>Fullname</label>
                <input 
                  type="text" 
                  placeholder="Anna Becker" 
                  className="userupdateinput" 
                />
              </div>
              <div className="userupdateitem">
                <label>Date</label>
                <input 
                  type="text" 
                  placeholder="09-09-1999" 
                  className="userupdateinput" 
                />
              </div>
              <div className="userupdateitem">
                <label>Email</label>
                <input 
                  type="text" 
                  placeholder="annabeck@email.com" 
                  className="userupdateinput" 
                />
              </div>
              <div className="userupdateitem">
                <label>Phone</label>
                <input 
                  type="text" 
                  placeholder="+1 123 456 7" 
                  className="userupdateinput" 
                />
              </div>
              <div className="userupdateitem">
                <label>Address</label>
                <input 
                  type="text" 
                  placeholder="New York | USA" 
                  className="userupdateinput" 
                />
              </div>
            </div>
            <div className="userupdateright">
              <div className="userupdateupload">
                <img 
                  src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="" 
                  className="userupdateimg" />
                  <label htmlFor="file">
                    <Publish className="userupdateicon"/>
                  </label>
                  <input type="file" id="file" style={{display:"none"}} />
              </div>
              <button className="userupdatebutton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
