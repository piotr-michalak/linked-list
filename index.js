import LinkedList from "./linked-list.js";

const list = new LinkedList(['5', '3', '4', '6', '8']);

console.log('Append');
list.append('10');
console.log(list.toString());
console.log('==========');

console.log('Prepend');
list.prepend('15');
console.log(list.toString());
console.log('==========');

console.log('Size');
console.log(list.size());
console.log('==========');

console.log('Head');
console.log(list.head());
console.log('==========');

console.log('Tail');
console.log(list.tail());
console.log('==========');

console.log('At');
console.log(list.at(2));
console.log('==========');

console.log('Pop');
console.log(list.toString());
list.pop();
console.log(list.toString());
console.log('==========');

console.log('Contains');
console.log(list.toString());
console.log(list.contains('5'));
console.log(list.contains('99'));
console.log('==========');

console.log('Find');
console.log(list.toString());
console.log(list.find('3'));
console.log(list.find('98'));
console.log('==========');

console.log('To string');
console.log(list.toString());