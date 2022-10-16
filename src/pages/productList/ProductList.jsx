import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className="productlistitem"> 
            <img src={params.row.img} alt="" className="productlistimg" />
            {params.row.name}
          </div>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/product/" + params.row.id}>
            <button className="productlistedit">Edit</button>
          </Link>
            <DeleteOutline className="productlistdelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
