//Button 
  document.getElementById('button1').onclick = function() {
    document.getElementById('demo').innerHTML = "I'm right";
}
document.getElementById('button2').onclick = function() {
    document.getElementById('demo').innerHTML = "No, I'm right!";
}

//Don't hover over me
//document.getElementById('dont-hover').mouseover= function() {
    //alert('Hello world!');
function myFunction() {    
    alert("Hey, I told you not to hover over me!");
}

//form, check user input
//changes the 
function passwordtest() {
    document.getElementById('username').value;
    const user = document.getElementById('username').value;
    document.getElementById('password').value;
    const pw = document.getElementById('password').value;
    if(pw != 12345678) {
        alert('Password Incorrect')
    }
    else {
        document.getElementById('change').innerHTML = "Welcome " + user + "!";
    }
}
