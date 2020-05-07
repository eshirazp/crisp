import { PivotTableContainerInterface } from "./PivotTable.interface";
import PivotTableView from "./PivotTable.view";

/*
    Container wrapped around view. This is where all the logic and data
    handling/ parsing is done so that the view just handles rendering
*/
const PivotTableContainer = ({data, subColumns}: PivotTableContainerInterface) => {

    // grabing how many subcategories are in a category to set the rowSpan in the view
    const getSubCategoryNum = (category: string): number => (
        data[category] 
            ? Object.keys(data[category]).length
            : -1
    );

    return PivotTableView({
        data,
        subColumns,
        getSubCategoryNum: getSubCategoryNum
    });
}

export default PivotTableContainer;