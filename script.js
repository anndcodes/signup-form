// toggle password visibility
function showPassword() {
  const togglePwd = document.querySelector(".show_pwd");
  const toggleConfirmPwd = document.querySelector(".show_confirm_pwd");
  const userPwd = document.getElementById("user_password");
  const confirmPwd = document.getElementById("confirm_password");

  // toggle password
  togglePwd.addEventListener("click", function() {
    userPwd.type === "password" ? userPwd.type = "text" : userPwd.type = "password";
  // toggle eye icon
    let name = this.getAttribute("name") === "eye-outline" ? "eye-off-outline" : "eye-outline";
    this.setAttribute("name", name)
  })
  
  // toggle confirm password
  toggleConfirmPwd.addEventListener("click", function() {
    confirmPwd.type === "password" ? confirmPwd.type = "text" : confirmPwd.type = "password";
    // toggle eye icon
    let name = this.getAttribute("name") == "eye-outline" ? "eye-off-outline" : "eye-outline";
    this.setAttribute("name", name);
  })

}

showPassword()


// prevent submit form if inputs aren't filled
function validateForm() {
  let nameInput = document.forms["form"]["first_name"].value;
  let lastNameInput = document.forms["form"]["last_name"].value;
  let emailInput = document.forms["form"]["email"].value;
  let phoneInput = document.forms["form"]["phone_number"].value;
  let pwdInput = document.forms["form"]["password"].value;
  let confirmPwdInput = document.forms["form"]["confirm_password"].value;

  if(nameInput == "" || lastNameInput == "" || emailInput == "" || phoneInput == "" || pwdInput == "" || confirmPwdInput == "") {
    const emptyFields = document.querySelector(".empty-fields");
    emptyFields.textContent = "there are fields that aren't filled yet!"
    return false;
  }
}


// check if passwords match 
let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let pwdInputs = document.querySelectorAll(".pwd")
let createAccount = document.getElementById("submit_btn").addEventListener("click", () => matchPassword());

// color inputs red if they do not match
pwdInputs.forEach(pwd => {
  pwd.addEventListener("input", function() {
    if(password.value !== confirmPassword.value) {
      password.style.border = "1px solid red";
      confirmPassword.style.border = "1px solid red"
    } else if(password.value === confirmPassword.value) {
      password.style.border = "transparent";
      password.style.borderBottom = "1px solid green";
      confirmPassword.style.border = "transparent";
      confirmPassword.style.borderBottom = "1px solid green";
    } else {
      password.style.border = "transparent";
      password.style.borderBottom = "1px solid #988D7D";
      confirmPassword.style.border = "transparent";
      confirmPassword.style.borderBottom = "1px solid #988D7D";
    }
  })
})

// prevent submit form if passwords do not match
function matchPassword() {
  if(confirmPassword.value !== password.value){
    confirmPassword.value = null;
    password.value = null;
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    let wrongPwd = document.querySelector(".wrong-pwd");
    wrongPwd.textContent = "* passwords do not match!"
    createAccount.setAttribute("disabled", "")
  } else {
    wrongPwd.textContent ="";
    password.style.border = "";
    confirmPassword.style.border = "";
  }
}









