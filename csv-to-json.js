var fs = require('fs');

var originalString = fs.readFileSync(process.argv[2], 'utf-8');
//this output is just returning a string; the \n character is considered an element of the string
// console.log(originalString);

var array = originalString.split('\n');
//this split function breaks the string at designated \n and returns an array
// console.log(array);

// var arraySplit = array.split(',');
// console.log(arraySplit);

var arrayOfObjects = [];

for (var i = 1; i < array.length; i++) {
	var personArray= array[i].split(', ');
	var person = {name: personArray[0], age: personArray[1], city: personArray[2]};

	arrayOfObjects.push(person);
};



var arrayOfObjectsStringified = JSON.stringify(arrayOfObjects);

fs.writeFileSync(process.argv[3], arrayOfObjectsStringified);


// arrayOfObjectsStringified)











