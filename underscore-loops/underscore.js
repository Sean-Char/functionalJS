//1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?
                          // prop
_.each([1,2,3], function(val,idx,list){
  console.log(val);
  console.log(idx);
})

//2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  //checks if the val is in arr
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

checkValue(helloArr, 'bye'); //false

//3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var checkValue = function(arr, val) {
  var result = false;
  _.each(arr, function(v){
    if (v === val) {
      result = true;
    }
  });
  return result;
}

checkValue(helloArr, 'hello');

//4. Write a loop that pushes all the values in an object to an array.

		//input: {two: 2, four: 4, three: 3, twelve: 12}
		//output: [2, 4, 3, 12]

var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function(val, prop, obj){
  return val
})


//5. Use _.map to mimic the previous behavior.

		//input: {two: 2, four: 4, three: 3, twelve: 12}
		//output: [2, 4, 3, 12]

    var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function(val, prop, obj){
      return val
    })


//6. Use _.filter to return all the even numbers in an array.

		//input: [9,8,7,6,5,2]
		//output: [8,6,2]

_.filter({two: 2, four: 4, three: 3, twelve: 12}, function(val){
  return val % 2 === 0;
})
