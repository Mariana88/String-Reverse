> 1. Fork+clone this repo
> 2. Set your gh-pages to build from master branch
> 3. Put a link to the tests in your repo's description
> 4. Choose a Codewar Kata to study
> 5. Go through the repo and fill in every blank
> 6. Publish and include this repo in your Codewar Gallery


# [String Reverse](https://www.codewars.com/kata/reversed-strings)

Complete the solution so that it reverses the string value passed into it.

stringReverse: Function
* Args:
  * string
* Return: string
  * A string with the same characters as the input string but in the opposite order.
* Behavior: Inverts the order of the characters in a string and returns the reversed string.

### Index
* [Solution Process](#solution-process)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)  
* [Language Features](#language-features)
* [Uses](#uses)
* [Learning Journal](#learning-journal)

---

## Solution Process

* Things that can be measured:
- lenght of the string    
- if lenght is odd or even  

* Relevant Inputs I might receive:
- strings with an even amount of characters  
- strings with an odd amount of characters  

* Input classification:
- Even string
- Odd String

* Some Working strings:
- blabla (even string, repeated string)  
- racecar , lol (mirroed string) 
- seven (odd string)

* Strategies considered:
- Break the string into an array of characters, store the order of characters, then reconstruct string in inverse order (see pseudo code)
- Iterate to swap characters in the string starting simultaneously from the end to the beginning and from beginning to end, untill the middle of the word is reached. (This is the implemented solution!)
- Use the () memory device in regular expressions to remember the characters and fully reconstruct the string in the reversed order

[TOP](#index)

---

## Solution Explanation

This solution uses the strategy to divide the input/output strings intwo separate parts, a beginning and an end. An iterative process is used to construct step by step these two separate parts, in the inverse order as the input string. The output reversed string is then formed by concatenating the end part with the beginning part.

[TOP](#index)

---

## Constraints
* Not to use an array or an object 
* Not to create a separate for loop for odd and even numbers  

[TOP](#index)
___

## Language Features

- string.length method
- for loop
- if statement


[TOP](#index)

---
## Uses
* adapting input to standards (e.g. first name/last name , stret/city Vs. city/street etc)


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:
* Strings are immutable objects
 * Manipulation of strings can be done by the methods of the String object (using these methods immediately converts a string into an object where every character in the string is a property), or by the RegExp (regular expression) object methods.
* Use of Regular Expressions in javascrit
* A best practice principle to be followed is that of "immutable data": create new data points instead of manipulating the input data within your code.
*

New vocabulary:
* regex (aka Regular expression)  
* word boundary (\b)


Things I struggled with:
* While loop construction which generates 1000+ extra steps. Need to understand better how execution works and why this happens.


My study goals and stragegies:
* Learn more about Regular Expressions



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

