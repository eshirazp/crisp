## Welcome!
To run the code, simply checkout this repo and run `npm install # or yarn` and `npm start # or yarn` 
The code was written using Typescript, Javascript ES6, JSX, and CSS, along with some Jest test cases.

Throughout the code should be comments to help show my thought process as I was writing the code. 

## PivotTable
The core of this assignment can be found in the `PivotTable` folder, under `components`. The idea here was that I wanted to parse all the pivot data (found in `api/pivotTableJson.ts`) through one loop. This is to reduce on cycles. I could have parsed through the data for partial information, and then grab all the totals while the view was being rendered, but I thought it would be best to do it all through one inital cycle. Currently grabbing the data is hard coded, but I would imagine that would be replaced by an API fetch call. 

The PivotTable is broken into the container, which all the data is parsed and logic is dealt with. Then there is the view, which handles all the JSX code and rendering onto the page.

The utility functions (functions that could be used by other components in the future) can be found in the `utils` folder

The CSS styling is very basic. To be honest, I did not spend too much time working on that portion.

## Extras
I added some test cases for the util functions. To run the tests, run `npm test # or yarn` 