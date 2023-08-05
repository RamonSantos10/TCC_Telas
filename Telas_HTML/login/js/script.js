const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

const eyeIcon = document.querySelector(".olho");
const lockIcon = document.querySelector(".cadeado");
const card = document.querySelector(".carta");


eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {

    passwordInput.type = "text";

    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.style.opacity = '50%';

}else if (passwordInput.type === "text") {

    passwordInput.type = "password";
    
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    eyeIcon.style.opacity = '100%';
  }
});


emailInput.addEventListener('focus', () => {
    emailInput.style.border = '2px solid #8257E5'
    card.style.color = '#8257E5';
})

emailInput.addEventListener('blur', () => {
    emailInput.style.border = '2px solid black'
    card.style.color = '#202024'
})



passwordInput.addEventListener('focus', () => {
    passwordInput.style.border = '2px solid #8257E5';
    lockIcon.style.color = '#8257E5';
    
})

passwordInput.addEventListener('blur', () => {
    passwordInput.style.border = '2px solid black'
    lockIcon.style.color = '#202024'
})





/*
if (document.hasFocus == passwordInput) {
    passwordInput.style.border = '0px solid #8257E5'
}else {
    passwordInput.style.border = '2px solid #8257E5'
}
*/


/*
passwordInput.addEventListener('focus', () => {
    passwordInput.style.border = '2px solid #8257E5'
})
passwordInput.addEventListener('leave', () => {
    passwordInput.style.border = '0px solid #8257E5'
})
*/