<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Object Properties</h1>
<h2>Access a Property with .</h2>

<p id="demo"></p>

<script>

const student ={
    name: "panda",
    age: 20,
};
//to add a property
student.nationality =" telugu"
// to delete a property
delete student.age;

document.getElementById("demo").innerHTML = student.name + " is " + student.age + " years old" + "have the nationality of" + student.nationality;
</script>

</body>
</html>