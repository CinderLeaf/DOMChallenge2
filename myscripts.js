//Button 
  document.getElementById('button1').onclick = function() {
    document.getElementById('demo').innerHTML = "I'm right";
}
document.getElementById('button2').onclick = function() {
    document.getElementById('demo').innerHTML = "No, I'm right!";
}

//Don't hover over me
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

//bonus
//calculates the volumn of the sphere
function volumnCalc () {
    let radius = document.getElementById('input').value;
    let volumn = 0;
    volumn = (4/3) * 3.14159265359 * (radius *radius * radius);
    alert("Volumn = " + volumn);
}
