function stringCalc(numbers) {

    let input = String(numbers);
    let stringSplit = input.split(/[\n,+;\_\/]/).filter(it => it);
    if(stringSplit.length > 0){

        let addition = 0
        for (i = 0; i<stringSplit.length ;i++) {
            addition = addition + parseInt(stringSplit[i]);
            if (stringSplit[i] < 0) {
                console.log("negatives not allowed: " + numbers)
                throw new Error("negatives not allowed");
            }
        }
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