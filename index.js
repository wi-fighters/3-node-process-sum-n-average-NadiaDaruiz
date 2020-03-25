const args = process.argv.slice(2);
let [operator, ...num] = args

const sum = (...num) => {
    // let result = num.reduce(function (acc, currValue) {
    //     acc = acc + currValue
    //     return acc
    // }, 0)

    let sum = 0;
    num.map(el => { sum += parseInt(el, 10) })
    return sum;
}

const avg = (...num) => {
    let result = sum(...num) / num.length;
    return result;
}


if (operator === 'sum') {
    console.log(sum(...num));

} else if (operator === 'avg') {
    console.log(avg(...num));

} else {
    console.log(`I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (to calculate the average)`)
}

