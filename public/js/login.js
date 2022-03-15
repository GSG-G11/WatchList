
var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementsByTagName("form")[0];
var emailErr = document.getElementById("emailErr");
var passwordErr = document.getElementById("passwordErr");


const displayErr=(errElem, errMsg)=> {
    errElem.innerText = errMsg;
  }

const checkEmail = ()=> {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, "Please enter a valid email address");
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, "Please enter an email address");
  } else {
    displayErr(emailErr, "");
    return true;
  }
};

const checkPw = ()=> {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};


email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);


form.addEventListener("submit", (event)=> {
    
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }
  
event.preventDefault();
fetch('/login',{
  method:'POST',
  headers:{ "Content-Type": 'application/json'},
  redirect: 'follow' ,
  body: JSON.stringify({
    email:email.value,
    password:password.value
  })

}).then(res=> res.json())
.then(data=>{
  swal('error',data.message,'error')
})
})

.then((response) => {
  if (response.redirected) {
      window.location.href = response.url;
  }
  return response;
})


});
