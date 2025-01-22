import React from "react";
import Row from "./Row";
import style from "./Table.module.scss";
import { ITable } from "../../types/ITable.interface";

const Table: React.FC<ITable> = ({ products }) => {
  return (
    <table className={style.table}>
      <thead className={style.table_header}>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Commission (10%)</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={style.table_body}>
        {products?.map((product) => (
          <Row key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
