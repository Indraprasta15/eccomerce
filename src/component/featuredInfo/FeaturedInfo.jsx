import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward  } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featureditem">
            <span className="featuredtitle">Revanue</span>
            <div className="featuredmoneycont">
                <span className="featuredmoney">$2,415</span>
                <span className="featuredmoneyrate">
                    -11.4 <ArrowDownward className="featuredicon negative"/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featureditem">
            <span className="featuredtitle">Sales</span>
            <div className="featuredmoneycont">
                <span className="featuredmoney">$4,415</span>
                <span className="featuredmoneyrate">
                    -1.4 <ArrowDownward className="featuredicon negative"/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featureditem">
            <span className="featuredtitle">Cost</span>
            <div className="featuredmoneycont">
                <span className="featuredmoney">$2,225</span>
                <span className="featuredmoneyrate">
                    +2.4 <ArrowUpward className="featuredicon"/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
    </div>
  )
};