
export interface PivotJsonInterface {
    "rowId": number,
    "orderId": string,
    "orderDate": string,
    "shipDate": string,
    "shipMode": string,
    "customerId": string,
    "customerName": string,
    "segment": string,
    "country": string,
    "city": string,
    "state": string,
    "postalCode": number,
    "region": string,
    "productId": string,
    "category": string,
    "subCategory": string,
    "productName": string,
    "sales": number,
    "quantity": number,
    "discount": number,
    "profit": number

};

export interface PivotTableInterface {
    [category: string]: {
        [subcategory: string]: {
            [state: string]: number
        }
    },
    "grandTotals"?: any
}

export interface PivotTablePropsInterface {
    data: PivotTableInterface,
    states: string[],
    getSubCategoryNum(category: string): number
}

export interface PivotTableStatesInterface {
    [state: string]: string
}