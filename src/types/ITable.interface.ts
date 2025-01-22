import { IProduct } from "./IProduct.interface";

export interface ITable {
    products: IProduct[]
}

export interface ITableRow {
    product: IProduct
}