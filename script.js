let formFields = document.getElementsByClassName("form-fields");
let email = document.getElementsByClassName("email-field")[0];
let submitBtn = document.getElementsByClassName("btn--submit")[0];
let errIcon = document.getElementsByClassName("err-icon");
let errorMessage = document.getElementsByClassName("error-message");
let fieldContainer = document.getElementsByClassName("field-container");
console.log(fieldContainer);

for (let i = 0; i < formFields.length; i++) {
  submitBtn.addEventListener("click", () => {
    if (formFields[i].value === "") {
      // Add error icons and error message and red border
      addError(i);
    } else {
      // remove error icons and error message and red border
      removeError(i);
    }
    // Check if email is not empty and a valid one
    if (formFields[i].value != "") {
      checkEmailandAddError(i);
    }
  });
  formFields[i].addEventListener("focus", () => {
    fieldContainer[i].classList.add("field-container-focus");
  });
  formFields[i].addEventListener("blur", () => {
    fieldContainer[i].classList.remove("field-container-focus");
    if (formFields[i].value != "") {
      // remove error icons and error message and red border
      removeError(i);
      checkEmailandAddError(i);
    }
  });
}
function addError(i) {
  errIcon[i].classList.remove("err-icon-hide");
  fieldContainer[i].classList.add("field-container-error");
  errorMessage[i].classList.remove("error-message-hide");
}
function removeError(i) {
  errIcon[i].classList.add("err-icon-hide");
  fieldContainer[i].classList.remove("field-container-error");
  errorMessage[i].classList.add("error-message-hide");
}
function checkEmailandAddError(i) {
  if (formFields[i].classList.contains("email-field")) {
    if (!ValidateEmail(email.value)) {
      addError(i);
      errorMessage[i].innerHTML = "Invalid email";
    }
  }
}
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}
