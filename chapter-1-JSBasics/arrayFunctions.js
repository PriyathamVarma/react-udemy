//map, find, findIndex, filter, reduce, concat, slice, splice

const array = [1,2,3,4,5,6,7,8,9,10]

//map
const mapFunc = array.map(x => x*2);
console.log(mapFunc);

//find
const findFunc = array.find(ele => ele % 2 === 1);
console.log(findFunc);

//findIndex

const indexFunc = array.findIndex(ele => ele > 8);
console.log(indexFunc);
console.log(array[indexFunc]);

//filter
const filterFunc = array.filter(ele => ele % 2 === 1);
console.log(filterFunc);

//reduce
//needs more explanation

//forEach
const forEachFunc = array.forEach(ele => console.log(ele % 2));
console.log(forEachFunc);