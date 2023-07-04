// toggle password visibility
function showPassword() {
  const togglePwd = document.querySelector(".show-pwd");
  const toggleConfirmPwd = document.querySelector(".show-confirm-pwd");
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