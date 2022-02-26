// javascript object notation
/* JSON */
const user = { id: 24, name: 'amir', job: 'actor', salary: 2500 }
const stringfied = JSON.stringify(user);
// console.log(stringfied);
// console.log(user);

const shop = {
    name: 'alia store',
    adress: 'dhaka road',
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhaat',
        job: 'actor',
        live: 'kolkata',
    },
    profit: 1200,
    isExpensive: false,

}
const shopStringfied = JSON.stringify(shop);
console.log(shopStringfied);
const converted = JSON.parse(shopStringfied);
console.log(converted);
console.log(converted.profit);
// console.log(shop);
