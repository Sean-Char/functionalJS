//1. Write a function, `nonsense` that takes an input `string`. This function contains another function, `blab` which alerts `string` and is immediately called inside the function `nonsense`. `blab` should look like this inside of the `nonsense` function:

var blab = function(){
  alert(string);
};

var nonsense = function(){
  var blab = function(){
    alert(string);
  }
  blab();
};

nonsense('blah blah blah');


//2. In your function, `nonsense`, change the immediate call to a setTimeout so that the call to `blab` comes after 2 seconds. The `blab` function itself should stay the same as before.

var nonsense = function(string){
  var blab = function(){
    alert(string);
  }
  setTimeout(blab, 2000)
};

//3. Now, instead of calling `blab` inside of `nonsense`, return `blab` (without invoking it). Call `nonsense` with some string and store the returned value (the `blab` function) in a variable called `blabLater`. Call `nonsense` again with a different string and store the returned value in a variable called `blabAgainLater`.

var nonsense = function(string){
  var blab = function(){
    alert(string);
  }
  return blab;
};

var blabLater = nonsense('blah blah blah');
blabLater()// blah blah blah
var blabAgainLater = nonsense('hehehe!');
blabAgainLater()// hehehe!
blabLater()// blah blah blah


//4. Inspect `blabLater` and `blabAgainLater` in your console. Call them (they are functions!) and see what happens!

console.log(blabLater);
console.log(blabAgainLater);

//5. Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.

var lastNameTrier = function(firstName){
   //does stuff

    var innerFunction = function() {
        //does stuff
    };
    //maybe returns something here
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'
//	This function is useful in case you want to try on different last names. For example, I could use firstName again with another last name:

firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne'); //logs 'Farmer Lynne'

var lastNameTrier = function(firstName){
  var inner = function(lastName){
    console.log(firstName + " " + lastName);
  }
  return inner;
}

var firstNameKatrina = lastNameTrier('Katrina');
firstNameKatrina('Uychaco');
firstNameKatrina('Smith');


//6. Create a `storyWriter` function that returns an object with two methods. One method, `addWords` adds a word to your story and returns the story while the other one, `erase`, resets the story back to an empty string. Here is an implementation:

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'


var storyWriter = function(){
  var story = '';
  return {
    addWords: function(str){
      story += str + ' ';
      return story.trim();
    },
    erase: function(){
      story = '';
    }
  };
};

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''


// 1. Using the module pattern, design a toaster. Use your creativity here and think about what you want your users to be able to access on the outside of your toaster vs what you don't want them to be able to touch.

var Toaster = function(){
  var maxTemp = 475;
  var temp = 0;
  return {
    setTemp: function(newTemp){
      if (newTemp > maxTemp){
        console.log('Temp is too High!');
      } else {
        temp = newTemp;
      }
    }
  }
}

var myToaster = Toaster(); // call Toaster set obj into variable

myToaster.setTemp(300); // set the temperature to 300
