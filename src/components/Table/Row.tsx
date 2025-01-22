import React from "react";
import { FaStar } from "react-icons/fa";
import { ITableRow } from "../../types/ITable.interface";

const Row: React.FC<ITableRow> = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>${(product.price * 0.1).toFixed(2)}</td>
      <td>
        <FaStar color="#FFEB00" style={{ paddingTop: 1, marginRight: 3 }} />{" "}
        <span>{product.rating.rate}</span>
      </td>
      <td>
        <img src={product.image} alt="" />
      </td>
    </tr>
  );
};

export default Row;
