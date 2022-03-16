
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const userName = document.getElementById("userName");
const form = document.getElementsByTagName("form")[0];
const userNmaeErr = document.getElementById("userNmaeErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const confirmErr = document.getElementById("confirmErr");

const displayErr=(errElem, errMsg)=> {
    errElem.innerText = errMsg;
  }

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
  redirect: 'follow' ,
  body: JSON.stringify({
    username:userName.value,
    email:email.value,
    password:password.value,
    confirmPassword:confirmPassword.value
  })
}).then((response) => {
  if (response.redirected) {
      window.location.href = response.url;
  }
  return response;
})
});



