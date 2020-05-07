## Welcome!
To run the code, simply checkout this repo and run `npm install # or yarn` and `npm start # or yarn` 
The code was written using Typescript, Javascript ES6, React, JSX, and HTML/CSS, along with some Jest test cases.

Throughout the code should be comments to help show my thought process as I was writing the code (better than I can explain through just one `README.md`) 

## Flow
The code flow can be broken down to the `api` layer grabs the sales data and parses/sorts that data and establishes the subcolumns (in this case, the list of states). That is handed down into the `PivotTable.container`, which in turn hands it down to the `PivotTable.view`, which are both stateless functional components (as opposed to the traditional class structure). 

## PivotTableContainer
The container handles any logic, while the view handles all the JSX code for rendering. Styling for the view is done in the CSS file, imported into the view. The CSS styling is very basic. To be honest, I did not spend too much time working on that portion. Styling and CSS of a page are very important, but the reason I did not focus too much on this was that I felt this assignment cared more for the JS logic as opposed to the exact look of the page.

## SalesApi
For the `api` layer, the idea here was that I wanted to parse all the sales data (found in `api/sales.api.ts`) through one loop. This is to reduce on cycles. I could have parsed through the data for partial information, and then grab all the totals while the view was being rendered, but I thought it would be best to do it all through one initial cycle. Currently grabbing the data is hard coded, but I would imagine that would be replaced by an API fetch call. 

Case sensitive checking is done while parsing the information. For example, one item with state "Alabama" is not different than "aLaBama" or category "furniture" compared to "Furniture". This is to help the user out as much as possible with simple human error. In addition, attempted to do as much error checking (with `console.warn`) as possible. 

Side note: In the dev console, I do a `console.log` for the final data object as the `PivotTable.container` receives it. 

The PivotTable component was designed to be generic, so that it would not be tied down to just this specific sales data. It does assume though that the data does follow the structure below. 
```sh
{
    category: { # ex: furniture
        subcategory: { # ex: bookcases
            subColumn: sales, # ex: 'Alabama': 250.23
            allSubcolumns: # total for all states of subcategory  GRAND TOTAL
        },
        subcategory: { # ex: chairs
        },
        categoryTotals: {
            subColumn: total sales for all sub # ex: furniture total
            allSubcolumns: total for all states of category # bottom right corner
        }
    },
    category: { # ex: technology
    },

    grandTotals: { # bottom row of stats
        subColumn: total sales for each state,
        allSubcolumns: total for all states
    }
}
```

The utility functions (functions that could be used by other components in the future) can be found in the `utils` folder along with testing.

Side note: I usually work with objects instead of arrays since searching with an object can be more efficient than searching through an array

Side note: Your Michigan Furniture Total is wrong. The numbers there add up to 12,593 (not 12,594 in your Google Doc example) 

## Extras
I added some test cases for the util functions. To run the tests, run `npm test # or yarn` 

Changed the `favicon` for fun to the Crisp logo :)