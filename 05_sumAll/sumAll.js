const sumAll = function(first, second) {
    if(first < 0 || second < 0 || typeof(first) !== "number" ||  typeof(second) !== "number")
        return "ERROR";
    let res = 0;
    let i = 0;

    if(first < second)
        i = first;
    else
    {
        let extra = second;
        second = first;
        first = extra;
    }

    for(; i <= second; i++)
        res += i;
    return res;
};

// Do not edit below this line
module.exports = sumAll;
