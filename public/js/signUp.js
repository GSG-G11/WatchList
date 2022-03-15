
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var userName = document.getElementById("userName");
var form = document.getElementsByTagName("form")[0];
var userNmaeErr = document.getElementById("userNmaeErr");
var emailErr = document.getElementById("emailErr");
var passwordErr = document.getElementById("passwordErr");
var confirmErr = document.getElementById("confirmErr");

const displayErr=(errElem, errMsg)=> {
    errElem.innerText = errMsg;
  }

  console.log(123454)

  const checkUserName = ()=> {
    if (userName.validity.typeMismatch) {
      displayErr(userNmaeErr, "Please enter a valid userNmae");
    } else if (userName.validity.valueMissing) {
      displayErr(userNmaeErr, "Please enter an email address");
    } else {
      displayErr(userNmaeErr, "");
      return true;
    }
  };

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

const checkConfirmPw =() =>{
  if (password.value != confirmPassword.value) {
    displayErr(confirmErr, "Passwords do not match");
  } else if (confirmPassword.validity.valueMissing) {
    displayErr(confirmErr, "Please confirm your password");
  } else {
    displayErr(confirmErr, "");
    return true;
  }
};
userName.addEventListener("focusout", checkUserName)
email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);
confirmPassword.addEventListener("focusout", checkConfirmPw);

form.addEventListener("submit", (event)=> {
    if (!checkUserName()) {
        event.preventDefault();
      }
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }
  if (!checkConfirmPw()) {
    event.preventDefault();
  }
event.preventDefault();
fetch('/signUp',{
  method:'POST',
  headers:{ "Content-Type": 'application/json'},
  body: JSON.stringify({
    username:userName.value,
    email:email.value,
    passwor:password.value,
    confirmPassword:confirmPassword.value
  })
})
});
