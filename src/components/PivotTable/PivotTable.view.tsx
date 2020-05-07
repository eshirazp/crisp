import React from "react";
import PropTypes from "prop-types";
import { numToStrWithComma } from "../../utils";
import { PivotTablePropsInterface } from "./PivotTable.interface";
import "./PivotTable.css";

const PivotTableView = ({ data, subColumns, getSubCategoryNum }: PivotTablePropsInterface) => {

    return (
        <table>
            <thead key="tableHead">
                <tr key="headerRow">
                    <th key={ "sumOfSales" } className={ "header" } colSpan={ 2 }>{ "SUM of Sales" }</th>
                    <th key={ "state" } className={ "header" } colSpan={ subColumns.length+1 }>{ "State" }</th>
                </tr>
                <tr key="headerSubRow">
                    <th key="category" className={ "header" }>{ "Category" }</th>
                    <th key="subCategory" className={ "header" }>{ "Sub-Category" }</th>
                    {
                        subColumns.map((subColumn: string) => <th key={ subColumn } className={ "subHeader"} >{ subColumn }</th>)
                    }
                    <th key="grandTotal" className={ "subHeader"}>{ "Grand Total" }</th>
                </tr>
            </thead>
            <tbody key="tableBody">
                    {                        
                        Object.keys(data)
                            .filter((category: string) => category !== "grandTotals")
                            .sort() // organize categories by alphabetic order like in the Google Doc example
                            .map((category: string) => {
                                const categoryRow = (
                                    <tr key={ category } className={ "bodyHeader "}>
                                        <td key={ category } rowSpan={ getSubCategoryNum(category) }>{ category }</td>
                                    </tr>
                                )

                                const subCategoryRows = Object.keys(data[category])
                                    .sort() // organize subcategories by alphabetic order like in the Google Doc example
                                    .map((subCategory: string) => (
                                        subCategory !== "categoryTotals" && // could do with a filter chained before map but would cause a whole loop again

                                            <tr key={ `${ category }-${ subCategory }`}>
                                                <td key={ `${ category }-${ subCategory }-data`} className={ "bodyHeader" }>{ subCategory }</td>
                                                {
                                                    subColumns.map((subColumn: string) => (
                                                        <td key={`${ category }-${ subCategory }-${ subColumn }-numbers` } className={ "data" }>
                                                            { numToStrWithComma(Math.round(data[category][subCategory][subColumn])) }
                                                        </td>
                                                    ))
                                                }
                                                <td key={ `${ category }-${ subCategory }-allSubcolumns-numbers` } className={ "data" }>
                                                    { numToStrWithComma(Math.round(data[category][subCategory]["allSubcolumns"])) }
                                                </td>
                                            </tr>
                                    ))

                                const totalRow = (
                                    <tr key={ "total-row" } className={ "bodyHeader" }>
                                        <td key={ "total" }>{ `${ category } Total` }</td>
                                        <td></td>
                                        {
                                            subColumns.map((subColumn: string) => (
                                                <td key={ `${ category }-${ subColumn }-total-numbers` } className={ "data" }>
                                                    { numToStrWithComma(Math.round(data[category]["categoryTotals"][subColumn])) }
                                                </td>
                                            ))
                                        }
                                        <td key={ `${ category }-allSubcolumns-numbers` } className={ "data" }>
                                            { numToStrWithComma(Math.round(data[category]["categoryTotals"]["allSubcolumns"])) }
                                        </td>
                                    </tr>
                                )

                                return [categoryRow, ...subCategoryRows, totalRow];
                            })
                    }
                    <tr key={ "grand-totals-row" } className={ "grandTotalHeader" }>
                        <td>{ "Grand Total" }</td>
                        <td></td>
                        {
                            subColumns.map((subColumn: string) => (
                                <td key={ `${subColumn}-grandTotals` } className={ "data" }>
                                    { numToStrWithComma(Math.round(data["grandTotals"] ? data["grandTotals"][subColumn] : 0)) }
                                </td>
                            ))
                        }
                        <td key={ "allSubcolumns-grandTotals" }>{ numToStrWithComma(Math.round(data["grandTotals"] ? data["grandTotals"]["allSubcolumns"] : 0)) }</td>
                    </tr>
            </tbody>
        </table>
    );
}

// Checking prop types
PivotTableView.propTypes = {
    data: PropTypes.object,
    subColumns: PropTypes.array,
    getSubCategoryNum: PropTypes.func
}

export default PivotTableView;
