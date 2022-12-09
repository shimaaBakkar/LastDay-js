// 6.	 Make a set that holds countries names.
// a)	return the numbers of repeated items in set 

var se = new Set(['Egypt','SA','UK','KSA','Italy','France','German','Egypt','SA','Italy']);

console.log(se);

var arr = ['Egypt','SA','UK','KSA','Italy','France','German','Egypt','SA','Italy'];

var arr1 = arr.length;
var se = new Set(arr);
var x= se.size;
let repeated = arr1 - x;

console.log(repeated);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.	Study new array api methods then create the following methods and apply it on this array var fruits 
// = ["apple", "strawberry", "banana", "orange", "mango"] 

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// // •	test that every element in the given array is a string 

fruits.forEach( function(str)
{
    if (isNaN(str))
    {
        console.log("Every elements in the array are string")
    } else {
        console.log("Elements in the array are not string")
    }
}
)

///// Another idea 
fruits.forEach(function()
{
    if (typeof fruits.item != "string")
{
    console.log("All elements is a string");
} else {
    console.log("Elements are string");
}
})


// •	test that some of array elements starts with "a"

fruits.forEach( function(index)
{
    if (index.indexOf('a',0)==0)
    {
        console.log("some of array elements starts with A ")
    } else {
        console.log("There are no elements of array starts with A ")
    }
}
)

// •	generate new array filtered from the given array with only elements that starts with "b" or "s" 

let filtered=[];
fruits.forEach( function(index)
{
    if (index.indexOf('b',0)==0||index.indexOf('s',0)==0)
    {
        console.log("some of array elements starts with b or s ")
        filtered.push(index)
    } 
}
)

// •	use forEach to display all elements of the new array from previous 

var i=0;

    fruits.forEach(function (items) {

    for(i=0;i<fruits.length;i++)
    {
        if(fruits[i]==items){
            console.log (items)
        }
    }

}    )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.	Using rest parameter and spread operator return max value from any array note: array length is not fixed
//  return min and max value and display each of them separately after function calling

var arr = [1,2,3,4,5,6,7,8,9,10];

var maxArr = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);
var minArr = Math.min(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);

console.log("The max value is : "+maxArr);
console.log("The min value is : "+minArr);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.	Make a literal object “ScientificDepartment” that has properties: name, Location, Address which is composed 
// from: City, Street, zip code, and add display function that prints all content of the object.

var ScientificDepartment=
{
// properties
    name : "Chemist",
    location : "2nd floor",
    Adress :{
        City:"Aswan",
        Street:"Univrsity street",
        zipcode:"123456789",
    },

// methods
  display(){
    return "name "+ ScientificDepartment.name +"location",
     ScientificDepartment.location + "Scientific.Adress.City"+ScientificDepartment.Adress.City 
     + "Scientific.Adress.Street"+ScientificDepartment.Adress.Street 
     +"Scientific.Adress.zipcode"+ScientificDepartment.Adress.zipcode ;
      
    }}


console.log(ScientificDepartment.display);

//Why do we need literal objects? And how does it differs than normal classes?

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// showSalary(), increaseSalalry(), and add it to the employee class.



// a)	What’s an Interface? What’s the difference between interface and abstract class? Is it allowed in JavaScript?





/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.	Implement the following classes (Add classes’ variables and method according to your logic):
// a)	Person class with need variables and methods.
// b)	Employee class that inherits from Person class and add need variables and methods.
// c)	Student class that inherits from Person class and add need variables and methods.
// d)	Try the following:
// i)	In Employee class add static method: displayHTRules(), that prints the company’s HR rules.
// •	What’s the difference between static method and member method?
// •	Add static variable that counts the number of Employee object.
// ii)	Try private members, getters and setters. Why Getters and setters are better than public accessible variables.

// iii)	Can we handle abstract class in JS? Try to make person class can’t be instanced.

class Person
{
    static #count=0;
    #id;
    constructor(a,b)
    {
        console.log(this.constructor)
        if(this.constructor==Person)
        {
            throw 'error this is abstract class'
        }
        Person.#count++;
        this.name=a;
        this.age=b;
    }

    setID(x)
    {
        this.#id=x;
    }

    getID()
    {
        return this.#id;
    }

    getdata()
    {
        console.log("make imple to this function")
    }


static getCount()
{
    return Person.#count;
}
    display()
    {
        console.log(this.name)
    }
}

class Stuednt extends Person
{
    constructor(a,b)
    {
        super(a,b);
    }
    display()
    {
        console.log("student");
    }
}

class Emp extends Person
{
    constructor(a,b)
    {
        super(a,b) 
    }

    display()
    {
        console.log("Emp");
    }
}

var p1=new Person("ahmed",20);
var p2=new Person("ali",30);
p1.display();
p2.display();
var s1=new Stuednt('Adel',25);
s1.display();