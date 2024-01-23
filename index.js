// index.js

//function to check if the given input is an array
function isArray(collection) {
    return Array.isArray(collection);
  }
  
  //function to check if the given input is an object
  function isObject(collection) {
    return typeof collection === 'object' && collection !== null && !isArray(collection);
  }
  
  // myEach function
  function myEach(collection, callback) {
    // Determine the type of collection and convert it to an array if it's an object
    const arrayCollection = isArray(collection) ? collection : Object.values(collection);
  
    // Iterate over each element in the collection and apply the callback
    for (let i = 0; i < arrayCollection.length; i++) {
      callback(arrayCollection[i]);
    }
  
    // Return the original collection
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    // Determine the type of collection and convert it to an array if it's an object
    const arrayCollection = isArray(collection) ? collection : Object.values(collection);
  
    // Map each element in the collection through the callback function
    const resultArray = [];
    for (let i = 0; i < arrayCollection.length; i++) {
      resultArray.push(callback(arrayCollection[i]));
    }
  
    // Return the new array without modifying the original collection
    return resultArray;
  }
  
  // myReduce function
function myReduce(collection, callback, acc) {
    // Determine the type of collection and convert it to an array if it's an object
    const arrayCollection = isArray(collection) ? collection : Object.values(collection);
  
    // Create a copy of the original array to avoid modification
    const copyArray = arrayCollection.slice();
  
    // Set the initial accumulator value
    let accumulator = acc !== undefined ? acc : copyArray.shift();
  
    // Iterate over each element in the collection and update the accumulator
    for (let i = 0; i < copyArray.length; i++) {
      accumulator = callback(accumulator, copyArray[i], collection);
    }
  
    // Return the single value
    return accumulator;
  }
  
  
  // myFind function
  function myFind(collection, predicate) {
    // Determine the type of collection and convert it to an array if it's an object
    const arrayCollection = isArray(collection) ? collection : Object.values(collection);
  
    // Iterate over each element in the collection and return the first one that passes the predicate test
    for (let i = 0; i < arrayCollection.length; i++) {
      if (predicate(arrayCollection[i])) {
        return arrayCollection[i];
      }
    }
  
    // Return undefined if no value passes the test
    return undefined;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    // Determine the type of collection and convert it to an array if it's an object
    const arrayCollection = isArray(collection) ? collection : Object.values(collection);
  
    // Filter values in the collection that pass the predicate test
    const resultArray = [];
    for (let i = 0; i < arrayCollection.length; i++) {
      if (predicate(arrayCollection[i])) {
        resultArray.push(arrayCollection[i]);
      }
    }
  
    // Return the filtered array
    return resultArray;
  }
  
  // mySize function
  function mySize(collection) {
    // Determine the type of collection and return the number of values
    return isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // myFirst function
  function myFirst(array, n) {
    // Return the first element or the first n elements of the array
    return n !== undefined ? array.slice(0, n) : array[0];
  }
  
  // myLast function
  function myLast(array, n) {
    // Return the last element or the last n elements of the array
    return n !== undefined ? array.slice(-n) : array[array.length - 1];
  }
  
  // myKeys function
  function myKeys(object) {
    // Return an array of the object's own enumerable properties
    return Object.keys(object);
  }
  
  // myValues function
  function myValues(object) {
    // Return an array of the object's own values
    return Object.values(object);
  }
  
  
  