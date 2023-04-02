const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  checkInputs()
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "نام کاربری را وارد کنید");
  } else {
    setSuccess(username);
  }


  if (emailValue === "") {
    setError(email, "ایمیل را وارد کنید");
  } else {
    setSuccess(email);
  }


  if (passwordValue === "") {
    setError(password, "رمز عبور را وارد کنید");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "تکرار رمز عبور را وارد کنید");
  }
  else if(passwordValue!==password2Value){
    setError(password2 ,' رمز عبور اشتباه وارد شده است')
  }
   else {
    setSuccess(password2);
  }
};

const setError = (input, massage) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = massage;
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
