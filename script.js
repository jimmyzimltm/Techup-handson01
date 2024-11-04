var age = 20
age = age + 45

var username = "preshant"
var password = "techup"
var isMale = false
var isLoggedIn = false

var blog_posts = ["Today was a good day", "The sky is blue", 
"It's raining heavily now"]

console.log(age)

console.log(username);

console.log(password);

console.log(isMale);

console.log(isLoggedIn);

console.log(blog_posts);


if (isMale == true) {

    console.log("You are male")

} else {

    console.log("You are not male")
}

while (age < 70) {

    console.log("Your age is " + age + " years old" );
    age = age + 1;

}

for (let age=30; age<32; age++) {
    console.log("Your age is " + age + " years old" );
}


function sayHello() {
    alert("Hello everyone");
}



function showAge() {
    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value;
    // Update the content for the HTML element with ID #header-age with
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}

//function validateForm(){
//var input=document.getElementById("user-email").value
//     if (!input.includes("@")){
//   return(false);
//    else return(true);
//}}