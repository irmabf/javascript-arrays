console.log('hello world');


// Array concat

// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

//1. Concatenate a value to an array
const array1 = ['a', 'b', 'c'];

console.log(array1.concat('x'));

//1. Concatenate two arrays

// It flattens the array in to another, it doesnt work with nested arrays

//  We're picking out the values from this array and this array, and we end up with a single flat array
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// Use cases:

const people = [
    {
      name: 'Shane'
    },
    {
      name: 'Sally'
    }
  ];
  
const people2 = [
    {
      name: 'Simon'
    },
    {
      name: 'Ben'
    }
];

people.concat(people2).forEach(person => console.log(person.name));
  