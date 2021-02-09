# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andyku25/lotide`

**Require it:**

`const _ = require('@andyku25/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns first element of an array
* `tail(arr)`: returns all elements following the frst element in an array 
* `middle(array)`: returns the middle/middle 2 elements in an array
* `countLetters(str)`: returns a key-value pair of each letter in the param and the count value of that key
* `countOnly(arr, obj)`: returns a key-value pair of each object key to search in the arr param and the count value of that obj key
* `findKey(obj, cb)`: returns the key of the object param given the cb condition
* `findKeyByValue(obj, str)`: returns the key of the object param given a specific value
* `letterPositions(str)`: returns the key-value pair of each index position of each input value
* `map(arr, cb)`: returns a modified array based off of the cb conditionals
* `takeUntil(arr, cb)`: returns an array of up until a conditional returns a false statement
* `without(arr, itemToRemoveArr)`: returns the arr less the 2nd param of items to remove
