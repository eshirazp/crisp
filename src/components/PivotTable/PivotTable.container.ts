import { checkValidState, capFirstCharacter } from "../../utils";
import { getPivotTableJson } from "../../api/pivotTableJson";
import { PivotTableInterface, PivotJsonInterface, PivotTableStatesInterface } from "./PivotTable.interface";
import PivotTableView from "./PivotTable.view";

/*
    Container wrapped around view. This is where all the logic and data
    handling/ parsing is done so that the view just handles rendering
*/
const PivotTableContainer = () => {
    const data: PivotTableInterface = {};
    const statesList: PivotTableStatesInterface = {};

    /* Give a detailed console.warn message in terms of which row and key failed */
    const checkErrors = (rowId: number, category: string, subCategory: string, state: string, sales: number): number => {
        if(!category) {
            console.warn(`Category was not valid at rowId ${rowId}`);
            return -1;
        }
        else if(!subCategory) {
            console.warn(`SubCategory was not valid at rowId ${rowId}`);
            return -1;
        }
        else if(!state) {
            console.warn(`State was not valid at rowId ${rowId}`);
            return -1;
        }
        else if(!sales || sales < 0) {
            console.warn(`Sales was not valid at rowId ${rowId}`);
            return -1;
        }

        return 1;
    }
    
    /* Organize the PivotTableJson into a data structure that can be easily read and fed into the view */
    const sortData = (): PivotTableInterface => {
        const pivotData: PivotJsonInterface[] = getPivotTableJson();

        // traditional for loop to more easily work with the indexes of the pivotData array
        for(let i = 0; i < pivotData.length; i++) {
            // capFirstCharacter is eliminating case sensitive situations when parsing the data
            const rowId = pivotData[i].rowId;
            const category = capFirstCharacter(pivotData[i].category);
            const subCategory = capFirstCharacter(pivotData[i].subCategory);
            const state = capFirstCharacter(pivotData[i].state);
            const sales = pivotData[i].sales;

            // if anything in the object is not valid, move onto the next object
            if (checkErrors(rowId, category, subCategory, state, sales) === -1) continue;

            /*
                going through the json data and organizing into a data structure
                separated by categories, subcategories, states, and grand totals
            */
            if(data[category]) {                
                if(data[category][subCategory]) {
                    if(data[category][subCategory][state]) {

                        data[category][subCategory][state] += sales; // each state in a subcategory
                        data[category][subCategory].allStates += sales; // combined total for all states in subcategory
                        data[category].categoryTotals[state] += sales; // category totals for a state
                        data[category].categoryTotals.allStates += sales; // combined total for all states in category

                        // grandTotals
                        data.grandTotals[state] += sales;
                        data.grandTotals.allStates += sales;
                    }
                    else { // establishing the state

                        data[category] = {
                            ...data[category],
                            [subCategory]: {
                                ...data[category][subCategory],
                                [state]: sales,
                                allStates: data[category][subCategory].allStates + sales
                            },
                            categoryTotals: {
                                ...data[category].categoryTotals,
                                [state]: data[category].categoryTotals[state] 
                                    ? data[category].categoryTotals[state] + sales 
                                    : sales,
                                allStates: data[category].categoryTotals.allStates + sales
                            }
                        }

                        data.grandTotals = {
                            ...data.grandTotals,
                            [state]: data.grandTotals[state] 
                                ? data.grandTotals[state] + sales
                                : sales,
                            allStates: data.grandTotals.allStates + sales
                        }

                        addToStatesList(state);
                    }
                }
                else { // establishing the sub category 

                    data[category] = {
                        ...data[category],
                        [subCategory]: {
                            [state]: sales,
                            allStates: sales
                        },
                        categoryTotals: {
                            ...data[category].categoryTotals,
                            [state]: data[category].categoryTotals[state] 
                                ? data[category].categoryTotals[state] + sales 
                                : sales,
                            allStates: data[category].categoryTotals.allStates + sales
                        }
                    }

                    data.grandTotals = {
                        ...data.grandTotals,
                        [state]: data.grandTotals[state] 
                            ? data.grandTotals[state] + sales
                            : sales,
                        allStates: data.grandTotals.allStates + sales
                    }

                    addToStatesList(state);
                }
            }
            else { // establishing the category

                data[category] = {
                    [subCategory]: {
                        [state]: sales,
                        allStates: sales
                    },
                    categoryTotals: {
                        [state]: sales,
                        allStates: sales
                    }
                }

                // establishing the grand totals
                !data.grandTotals ?
                    data.grandTotals = {
                        [state]: sales,
                        allStates: sales
                    } :
                    data.grandTotals = {
                        ...data.grandTotals,
                        [state]: data.grandTotals[state] 
                            ? data.grandTotals[state] + sales
                            : sales,
                        allStates: data.grandTotals.allStates + sales
                    }

                addToStatesList(state);
            }
        }

        console.log(data);
        return data;
    }

    const addToStatesList = (state: string) => {
        if(!statesList[state]) {
            if(checkValidState(state))
            statesList[state] = state;
        }
    }

    // grabing how many subcategories are in a category to set the rowSpan in the view
    const getSubCategoryNum = (category: string): number => (
        data[category] 
            ? Object.keys(data[category]).length
            : -1
    );

    return PivotTableView({
        data: sortData(),
        states: Object.keys(statesList).sort(),
        getSubCategoryNum: getSubCategoryNum
    });
}

export default PivotTableContainer;