function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(value="special") {
        return `You are ${flair}${value}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

let actionApplyer = function(start, arr) {
    for (let i = 0; i < arr.length; i++){
        start = arr[i](start)
    }
    return start
}