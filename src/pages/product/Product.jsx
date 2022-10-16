import { Link } from "react-router-dom";
import Chart from "../../component/chart/Chart";
import "./Product.css";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="producttitlecont">
        <h1 className="producttitle">Product</h1>
        <Link to="/newproduct">
          <button className="productaddbutton">Create</button>
        </Link>
      </div>
      <div className="producttop">
        <div className="producttopleft">
           <Chart data={productData} title="Sales Performance" grid dataKey="Sales"/>
        </div>
        <div className="producttopright">
          <div className="productinfotop">
            <img 
              src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="pp" 
              className="productinfoimg" />
            <span className="productinfoname">Apple Airpods</span>
          </div>
          <div className="productinfobottom">
            <div className="productinfoitem">
              <span className="productinfokey">id:</span>
              <span className="productinfovalue">123</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Sales:</span>
              <span className="productinfovalue">5123</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Active:</span>
              <span className="productinfovalue">Yes</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">In Stock:</span>
              <span className="productinfovalue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productbottom">
        <form className="productform">
          <div className="productformleft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods"/>
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productformright">
            <div className="productupload">
              <img 
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                className="productuploadimg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productbutton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}
