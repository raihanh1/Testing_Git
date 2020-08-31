function myFunction() {
  var x = document.getElementById("pw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const check = (form) => {
  if (form.email == "raihan2345@gmail.com" && form.password == "12345678") {
    window.open("google.com");
  } else {
    document.getElementById("incorrectMessage").style.visibility = "visible";
  }
};

function registrationForm() {
  document.getElementsByClassName("register").style.display = "block";
}
