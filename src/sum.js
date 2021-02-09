
function stringCalc(numbers) {

    let input = String(numbers);
    let stringSplit = input.split(',');
    
    if(stringSplit.length > 1){

        let addition = parseInt(stringSplit[0]) + parseInt(stringSplit[1]);
        return addition;
    }
    
    else {
        let addition = parseInt(stringSplit[0]);
        return addition;
    }
}
const sum = stringCalc()

module.exports = {
    stringCalc
}