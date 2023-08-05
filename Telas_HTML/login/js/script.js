const passwordInput = document.querySelector(".password");
const eyeIcon = document.querySelector(".olho");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }else if (passwordInput.type === "text") {
    passwordInput.type = "password";

    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});
