
export interface SalesApiJsonInterface {
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

export interface SalesApiInterface {
    [category: string]: {
        [subcategory: string]: {
            [state: string]: number
        }
    },
    "grandTotals"?: any
}

export interface SalesApiStatesInterface {
    [state: string]: string
}

export interface SalesApiApi {
    data: SalesApiInterface,
    statesList: SalesApiStatesInterface
}