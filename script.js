const form = document.querySelector('#form');
const name = document.querySelector('#message');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

let isValid= false;
let passwordsMatch = false;

function validateForm(){
  isValid = form.checkValidity();
  console.log(isValid);{
  if(!isValid){
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
  }
  else{
    if(password1.value === password2.value){
      passwordsMatch = true;
   
      password1.style.borderColor = 'green';
      password2.style.borderColor = 'green';

     
       }else{
      passwordsMatch = false;
      message.textContent = 'Make sure passwords match.';
      message.style.color = 'red';
      password1.style.borderColor = 'red';
      password2.style.borderColor = 'red';
      return;
       }
       if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
      }
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});
