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
    const createAccount = document.querySelector(".create_account");
    const emptyFields = document.createElement("span");
    emptyFields.classList.add("empty-fields");
    emptyFields.textContent = "there are fields that aren't filled yet!"
    createAccount.appendChild(emptyFields);
    return false;
  }
}