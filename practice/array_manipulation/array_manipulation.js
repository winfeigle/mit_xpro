//Write a function called sliceElements that return the last 3 elements of any given array:
function sliceElements(givenArray) {
    let beginning = givenArray.length - 3; 
    let end = givenArray.length;
    return givenArray.slice(beginning, end);
  }

//Write a function called spliceElements that would remove the last element of a given array and add 2 new elements at that position:
function spliceElements(givenArray, element1, element2) {
    const arrayLength = givenArray.length;
    givenArray.splice(arrayLength - 1, 1, element1, element2);
    return givenArray;
}

//Write a function called splitElements that would convert a given string into an array of words.
function splitElements(givenString) {
    return givenString.split(' '); 
  }
