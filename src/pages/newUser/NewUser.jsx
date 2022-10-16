import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newuser">
      <h1 className="newusertitle">New User</h1>
      <form className="newuserform">
        <div className="newuseritem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newuseritem">
          <label>Fullname</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newuseritem">
          <label>Email</label>
          <input type="text" placeholder="john@email.com" />
        </div>
        <div className="newuseritem">
          <label>Password</label>
          <input type="Password" placeholder="Password" />
        </div>
        <div className="newuseritem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 7" />
        </div>
        <div className="newuseritem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newuseritem">
          <label>Gender</label>
          <div className="newusergender">  
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuseritem">
          <label>Active</label>
          <select name="active" id="active" className="newuserselect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuserbutton">Create</button>
      </form>
    </div>
  )
};
