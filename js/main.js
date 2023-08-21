/*-------constants------*/
// array of objects containing different dice


/*----state variables---*/
// currently selected die
// input number of die
// multi-die mode (list, add, digits(D10 Only))
// buff
// debuff
// chosen dice weight
// list of 10 most recent rolls


/*------cached els------*/

// die selectors
// display die
// mode selector
// number of dice input field
// buff and debuff fields
// weight button div
// roll button
// history display



/*-------functions------*/

// gaussian normal distribution random calc
function normalDist(die) {
    // pick random number with range set by dieChoice based on normal distribution
}
// evil skew random calc
function evilSkew(die){
    // pick random number with range set by dieChoice skewed towards worse outcomes
}
// blessed skew random calc
function blessedSkew(die) {
    // pick random number with range set by dieChoice skewed towards better outcomes
}
// unweighted random calc
function fullyRandom(die) {
    // pick random number with range set by dieChoice with a flat distribution
}
// add to history fn
function adjustHistory(outcomeStr) {
    // add most recent result string to history
    // check if history has >10 entries
    // if it does remove the earliest one
}

// var updater
function updateVariables() {
    // update mode variable
    // update number of dice variable
    // update buff and debuff variables
}

// die choice handler
function handleDieSelection(evt) {
    // 
}

// rollArr adder
function sumArr(arr) {
    // declare result variable
    // loop adding all values to result
    // return result
}

function digitSum(arr) {
    // declare result variable
    // loop adding each index of arr sequentially times modifier which increases by ten each time e.g. [1, 2, 3] adds (3*1) + (2*10) + (1*100)
    // return result 
}

// master function
function rollDice(dieChoice, dieOutputMode, numOfDice, buff, debuff, dieWeight) {
    // set die range variable by die choice
    // set amount modifier by combining buff and debuff
    // create empty array to hold rolls
    // for loop with iterator set by numOfDice
        // if else conditional sequence calling random num functions based on chosen dieWeight
        // .push result of each roll to roll array
        // subtract one from iterator
    // final result if else based on dieOutputMode
        // if dieOutputMode is set to list 
            // outcomeStr = `${numOfDice}D${dieChoice}${modifier}: ${rollArr} ${modifier}`
        // if dieOutputMode is set to add
            // outcomeStr = `${numOfDice}D${dieChoice}${modifier}: ${sumArr(rollArr)} ${modifier} = ${sumArr(rollArr) + modifier}`
        // if dieOutputMode is set to digits (D10 only)
            // outcomeStr = `${numOfDice}D${dieChoice}${modifier}: ${digitSum(rollArr)} ${modifier} = ${digitSum(rollArr) + modifier}`
    // call adjust history passing outcomeStr
}

/*---event listeners----*/


