/*
    Takes in a number and returns a string of that number, but comma
    separated format
*/
export const numToStrWithComma = (num: number) => {
    return ((!num && num !== 0) || typeof num !== "number")
        ? "" 
        : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
    Takes a string, can have multiple words in string, and changes the format
    so that the first character is capitalized and the rest are lower case. 
    It will skip if not the first word is or/and/of for styling purposes
*/
export const capFirstCharacter = (str: string): string => {
    if(typeof str !== "string") return "";

    const strArr = str.split(" ");
    strArr.forEach((ele: string, idx: number) => {
        strArr[idx] = (idx !== 0 && (ele.toLowerCase() === "or" || ele.toLowerCase() === "and" || ele.toLowerCase() === "of"))
            ? ele.toLowerCase()
            : ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
    })

    return strArr.join(" ");
}