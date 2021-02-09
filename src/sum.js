function stringCalc(numbers) {

    let input = String(numbers);
    let stringSplit = input.split(/[\n,+;\_\/]/).filter(zahl => zahl && zahl<1000)
    .map(zahl => parseInt(zahl));
    if(stringSplit.length > 0){

        let addition = 0
        for (i = 0; i<stringSplit.length ;i++) {
            addition = addition + stringSplit[i];
            if (stringSplit[i] < 0) {
                let allNegatives = stringSplit.filter(zahl => zahl < 0)
                console.log("negatives not allowed: " + allNegatives)
                throw new Error("negatives not allowed");
            }
        }
        return addition;
    }
    
    else {
        return NaN;
    }
}
const result = stringCalc(process.argv[2]);
console.log("Das Ergebnis ist: " + result);

module.exports = {
    stringCalc
}