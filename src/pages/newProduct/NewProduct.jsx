import "./NewProduct.css";

export default function NewProduct() {
  return (
    <div className="newproduct">
      <h1 className="newproducttitle">New Product</h1>
      <form className="newproductform">
        <div className="newproductitem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newproductitem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newproductitem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newproductitem">
          <label>Active</label>
          <select name="active" id="active" className="newproductselect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newproductbutton">Create</button>
      </form>
    </div>
  )
};