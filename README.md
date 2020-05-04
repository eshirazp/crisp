## Welcome!
To run the code, simply checkout this repo and run `npm install # or yarn` and `npm start # or yarn` 
The code was written using Typescript, Javascript ES6, JSX, and CSS, along with some Jest test cases.

Throughout the code should be comments to help show my thought process as I was writing the code (better than I can explain through just one `README.md`) 

## PivotTable
The core of this assignment can be found in the `PivotTable` folder, under `components`. The idea here was that I wanted to parse all the pivot data (found in `api/pivotTableJson.ts`) through one loop. This is to reduce on cycles. I could have parsed through the data for partial information, and then grab all the totals while the view was being rendered, but I thought it would be best to do it all through one inital cycle. 

Case sensitive checking is done while parsing the information. For example, one item with state "Alabama" is not different than "aLaBama". This is to help the user out as much as possible with simple human error. In addition, attempted to do as much error checking (with `console.warn`) as possible. 

The data is parsed to follow this kind of structure below. All structures in the code are defined through Typescript, including ths one
```sh
{
    category: { # furniture
        subcategory: { # bookcases
             state: sales, # 'Alabama': 250.23
            allStates: # total for all states of subcategory  GRAND TOTAL
        },
        subcategory: { # chairs
        },
        categoryTotals: {
            state: total sales for all sub # furniture total
            allStates: total for all states of category # bottom right corner
        }
    },
    category: { # technology
    },

    grandTotals: { # bottom row of stats
        state: total sales for each state,
        allStates: total for all states
    }
}
```

The PivotTable is broken into the container, which all the data is parsed and logic is dealt with. Then there is the view, which handles all the JSX code and rendering onto the page. Styling for the view is done in the CSS file, imported into the view.

Currently grabbing the data is hard coded, but I would imagine that would be replaced by an API fetch call. 

The utility functions (functions that could be used by other components in the future) can be found in the `utils` folder

The CSS styling is very basic. To be honest, I did not spend too much time working on that portion. Styling and CSS of a page are very important, but the reason I did not focus too much on this was that I felt this assignment cared more for the JS logic as opposed to the exact look of the page. 

Side note: I usually work with objects instead of arrays since searching with an object can be more efficient than searching through an array


## Extras
I added some test cases for the util functions. To run the tests, run `npm test # or yarn` 

Changed the `favicon` for fun to the Crisp logo :)