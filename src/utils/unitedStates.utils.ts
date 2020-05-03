
/*
    Get list of US states and District of Columbia. Can hold more information
    than just its name, can be the key with abbrevation, population, etc
    but for this assignment, this should be plenty
*/
const statesList: { [state: string]: string } =
    {
        "Alabama": "Alabama",
        "Alaska": "Alaska",
        "Arizona": "Arizona",
        "Arkansas": "Arkansas",
        "California": "California",
        "Colorado": "Colorado",
        "Connecticut": "Connecticut",
        "Delaware": "Delaware",
        "District of Columbia": "District of Columbia",
        "Florida": "Florida",
        "Georgia": "Georgia",
        "Hawaii": "Hawaii",
        "Idaho": "Idaho",
        "Illinois": "Illinois",
        "Indiana": "Indiana",
        "Iowa": "Iowa",
        "Kansas": "Kansas",
        "Kentucky": "Kentucky",
        "Louisiana": "Louisiana",
        "Maine": "Maine",
        "Maryland": "Maryland",
        "Massachusetts": "Massachusetts",
        "Michigan": "Michigan",
        "Minnesota": "Minnesota",
        "Mississippi": "Mississippi",
        "Missouri": "Missouri",
        "Montana": "Montana",
        "Nebraska": "Nebraska",
        "Nevada": "Nevada",
        "New Hampshire": "New Hampshire",
        "New Jersey": "New Jersey",
        "New Mexico": "New Mexico",
        "New York": "New York",
        "North Carolina": "North Carolina",
        "North Dakota": "North Dakota",
        "Ohio": "Ohio",
        "Oklahoma": "Oklahoma",
        "Oregon": "Oregon",
        "Pennsylvania": "Pennsylvania",
        "Rhode Island": "Rhode Island",
        "South Carolina": "South Carolina",
        "South Dakota": "South Dakota",
        "Tennessee": "Tennessee",
        "Texas": "Texas",
        "Utah": "Utah",
        "Vermont": "Vermont",
        "Virginia": "Virginia",
        "Washington": "Washington",
        "West Virginia": "West Virginia",
        "Wisconsin": "Wisconsin",
        "Wyoming": "Wyoming"
    }

/*
    Checks if a state is valid with the list above. A bit of overkill I 
    will admit, but can never be too careful
*/
export const checkValidState = (state: string): boolean => (
    !!statesList[state]
)

// export const getListofStates = (): string[] => {
//     return [
//         "Alabama",
//         "Alaska",
//         "Arizona",
//         "Arkansas",
//         "California",
//         "Colorado",
//         "Connecticut",
//         "Delaware",
//         "District of Columbia",
//         "Florida",
//         "Georgia",
//         "Hawaii",
//         "Idaho",
//         "Illinois",
//         "Indiana",
//         "Iowa",
//         "Kansas",
//         "Kentucky",
//         "Louisiana",
//         "Maine",
//         "Maryland",
//         "Massachusetts",
//         "Michigan",
//         "Minnesota",
//         "Mississippi",
//         "Missouri",
//         "Montana",
//         "Nebraska",
//         "Nevada",
//         "New Hampshire",
//         "New Jersey",
//         "New Mexico",
//         "New York",
//         "North Carolina",
//         "North Dakota",
//         "Ohio",
//         "Oklahoma",
//         "Oregon",
//         "Pennsylvania",
//         "Rhode Island",
//         "South Carolina",
//         "South Dakota",
//         "Tennessee",
//         "Texas",
//         "Utah",
//         "Vermont",
//         "Virginia",
//         "Washington",
//         "West Virginia",
//         "Wisconsin",
//         "Wyoming"
//     ]
// }