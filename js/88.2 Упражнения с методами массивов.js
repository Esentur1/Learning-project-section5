'use strict';

const funds = [
    {amount: 1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
    let total = 0;
    const positiveIncomeAmount = data.filter(item => {
        return item.amount >= 0;
    })
    .map(item => {
        total += item.amount;
    });
    return total;

};

const getTotalIncomeAmount = (data) => {
    let total = 0;
    const checkPositiveAmount = data.some(item => {
        return item.amount < 0;
    });
    if (checkPositiveAmount) {
        data.map(item => {
            total += item.amount;
        });
        return total;
    } else {
        return getPositiveIncomeAmount(data);
    }
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));