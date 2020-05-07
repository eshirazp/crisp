import { SalesApiInterface, SalesApiStatesInterface } from "../../api/salesApi.interface";

export interface PivotTableContainerInterface {
    data: SalesApiInterface,
    subColumns: string[]
}

export interface PivotTablePropsInterface {
    data: SalesApiInterface,
    subColumns: string[],
    getSubCategoryNum(category: string): number
}