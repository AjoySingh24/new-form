const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");
const retype_password = document.querySelector("input[name='repassword']");
const fullname = document.querySelector("input[name='fullname']");
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
  
  //For Email Validation
  if (email.value === '') {
    email.parentElement.classList.add('form-field-error');
    console.log("Please enter a valid email address..");
  } else {
    email.parentElement.classList.remove('form-field-error');
  }
  
  //For Password Validation
  if (password.value === '') {
    password.parentElement.classList.add('form-field-error');
    console.log("password should be field");
    
  } else {
    password.parentElement.classList.remove('form-field-error');
  }

  //For ReType_Password Validation
  if (retype_password.value === '' || password.value != retype_password.value) {
        retype_password.parentElement.classList.add('form-field-error');
        console.log("password does not match");
        
  } else {
        retype_password.parentElement.classList.remove('form-field-error');
  }

  // For Name Validation
   if(fullname.value === ''){
    fullname.parentElement.classList.add('form-field-error');
    console.log("Please enter a valid name..");
   } else{
    fullname.parentElement.classList.remove('form-field-error');
   }

  event.preventDefault();
});
