//his way1
const student= {
    name: "prasanna",
    age: 21,
    designation: "student",
    phonenumber: 9948212353,
}
const student2={
    name:"nani",
    age:23,
    designation: "student",
    phonenumber: 9542353943,
}
// this way2
const student3= {};
student3.name="panda",
student3.age= 21,
student3.designation ="teacher",
student3.phonenumber= 9347315709

// using this keyword
const employee ={
firstname:"prakash",
lastname:"devapujyula",
id:2345,
age:27,
location: "hyderabad",
fullname: function(){
    return this.firstname + this. lastname;
}
};