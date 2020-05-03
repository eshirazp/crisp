import React from "react";
import PropTypes from "prop-types";
import { numToStrWithComma } from "../../utils";
import { PivotTablePropsInterface } from "./PivotTable.interface";
import "./PivotTable.css";

const PivotTableView = ({ data, states, getSubCategoryNum }: PivotTablePropsInterface) => {

    return (
        <table>
            <thead key="tableHead">
                <tr key="headerRow">
                    <th key={ "sumOfSales" } style={{ backgroundColor: "#C0C0C0", textAlign: "left" }} colSpan={ 2 }>{ "SUM of Sales" }</th>
                    <th key={ "state" }      style={{ backgroundColor: "#C0C0C0", textAlign: "left" }} colSpan={ states.length+1 }>{ "State" }</th>
                </tr>
                <tr key="headerSubRow">
                    <th key="category"    style={{ backgroundColor: "#C0C0C0", textAlign: "left" }}>{ "Category" }</th>
                    <th key="subCategory" style={{ backgroundColor: "#C0C0C0", textAlign: "left" }}>{ "Sub-Category" }</th>
                    {
                        states.map((state: string) => <th key={ state } style={{ backgroundColor: "#696969", color: "#FFFFFF", textAlign: "left" }}>{ state }</th>)
                    }
                    <th key="grandTotal" style={{ backgroundColor: "#696969", color: "#FFFFFF", textAlign: "left" }}>{ "Grand Total" }</th>
                </tr>
            </thead>
            <tbody key="tableBody">
                    {                        
                        Object.keys(data)
                            .filter((category: string) => category !== "grandTotals") // maybe remove filter 
                            .sort() // organize categories by alphabetic order like in the Google Doc example
                            .map((category: string) => {
                                const categoryRow = (
                                    <tr key={ category } style={{ backgroundColor: "#DCDCDC", textAlign: "left" }}>
                                        <td key={ category } rowSpan={ getSubCategoryNum(category) }>{ category }</td>
                                    </tr>
                                )

                                const subCategoryRows = Object.keys(data[category])
                                    .sort() // organize subcategories by alphabetic order like in the Google Doc example
                                    .map((subCategory: string) => (
                                        subCategory !== "categoryTotals" && // could do with a filter chained before map but would cause a whole loop again

                                            <tr key={ `${ category }-${ subCategory }`}>
                                                <td key={ `${ category }-${ subCategory }-data`} style={{ backgroundColor: "#DCDCDC", textAlign: "left" }}>{ subCategory }</td>
                                                {
                                                    states.map((state: string) => (
                                                        <td key={`${ category }-${ subCategory }-${ state }-numbers` } style={{ textAlign: "right" }}>
                                                            { numToStrWithComma(Math.round(data[category][subCategory][state])) }
                                                        </td>
                                                    ))
                                                }
                                                <td key={ `${ category }-${ subCategory }-allStates-numbers` } style={{ textAlign: "right" }}>
                                                    { numToStrWithComma(Math.round(data[category][subCategory]["allStates"])) }
                                                </td>
                                            </tr>
                                    ))

                                const totalRow = (
                                    <tr key={ "total-row" } style={{ backgroundColor: "#DCDCDC", textAlign: "left" }}>
                                        <td key={ "total" }>{ `${ category } Total` }</td>
                                        <td></td>
                                        {
                                            states.map((state: string) => (
                                                <td key={ `${ category }-${ state }-total-numbers` } style={{ textAlign: "right" }}>
                                                    { numToStrWithComma(Math.round(data[category]["categoryTotals"][state])) }
                                                </td>
                                            ))
                                        }
                                        <td key={ `${ category }-allStates-numbers` } style={{ textAlign: "right" }}>
                                            { numToStrWithComma(Math.round(data[category]["categoryTotals"]["allStates"])) }
                                        </td>
                                    </tr>
                                )

                                return [categoryRow, ...subCategoryRows, totalRow];
                            })
                    }
                    <tr key={ "grand-totals-row" } style={{ backgroundColor: "#DCDCDC", textAlign: "left", fontWeight: "bold", borderTop: "1px solid black" }}>
                        <td>{ "Grand Total" }</td>
                        <td></td>
                        {
                            states.map((state: string) => (
                                <td key={ `${state}-grandTotals` } style={{ textAlign: "right" }}>
                                    { numToStrWithComma(Math.round(data["grandTotals"] ? data["grandTotals"][state] : 0)) }
                                </td>
                            ))
                        }
                        <td key={ "allStates-grandTotals" }>{ numToStrWithComma(Math.round(data["grandTotals"] ? data["grandTotals"]["allStates"] : 0)) }</td>
                    </tr>
            </tbody>
        </table>
    );
}

// Checking prop types
PivotTableView.propTypes = {
    data: PropTypes.object,
    states: PropTypes.array,
    getSubCategoryNum: PropTypes.func
}

export default PivotTableView;
