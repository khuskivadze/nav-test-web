//show and remove log in section
const logIn =  document.querySelector('.log_in');
const container =  document.querySelector('.container')
const logBtn =  document.querySelector('.login')
const close = document.querySelector('.close')
//show and remove log in section
// show and remove register and sing sections
const logContainer =  document.querySelector('.log_container')
const regBtn =  document.querySelector('.reg_btn')
const register =  document.querySelector('.register')
const sinInBtn =  document.querySelector('.sing-in')
// show and remove register and sing sections

///  registation and validation // 
//name-surname validation;
const firstName = document.getElementById('firsname') 
const lastName = document.getElementById('surName') 
const nameError = document.querySelector('.name-error');
const surNameError = document.querySelector('.surName-error') ;
///  registation and validation // 
//name-surname validation;

//email chek and   validation  //

const email =  document.getElementById('email') 
const password =  document.getElementById('password') 
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');
//email chek and   validation  //

//burger menu 

const  burgerMenu = document.querySelector('.burger');
const navigation = document.querySelector('.navigation')
const header =  document.querySelector('.header')
const closeMenu =  document.querySelector('.close_menu')
//burger menu 

// check button validation /
const registerBtn  = document.getElementById('register_btn');

//show and remove log in section
 function openLogIn () {
    logIn.classList.add('active')
}
logBtn.addEventListener('click', openLogIn)

 


function closeLogIn () {
    logIn.classList.remove('active')
}
close.addEventListener('click', closeLogIn)
//show and remove log in section

// show and remove register and sing sections
function showRegisterFn () {
    register.classList.add('showRegister')
}
regBtn.addEventListener('click', showRegisterFn);

function removeRegister () {
    register.classList.remove('showRegister')
}
sinInBtn.addEventListener('click', removeRegister)

// show and remove register and sing sections


//name-surname validation;
 function NameValidation(e) {
  if(e.target.value === ' ') {
    nameError.innerHTML = 'Name is required';
    nameError.style.color = 'red';
    nameError.style.fontSize = '12px'
    return false
  }
   nameError.innerHTML = '';
   return true
};
function lastNameValidation(e) {
    if(e.target.value === ' ') {
      surNameError.innerHTML = 'last Name is required';
      surNameError.style.color = 'red';
      surNameError.style.fontSize = '12px'
      return false
    }
    surNameError.innerHTML = '';
     return true
     
    
};
//name-surname validation;
firstName.addEventListener('input', NameValidation)
lastName.addEventListener('input', lastNameValidation)

//email chek and   validation  //
 function checkEmail (e) {
   if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      emailError.innerHTML = 'Enter corect email';
      emailError.style.fontSize = '12px';
      email.style.borderColor =  'red';
      emailError.style.color = 'red';
      return false
    }
    emailError.innerHTML = '';
    email.style.borderColor =  'green';
    return true
 }
 email.addEventListener('input', checkEmail)

 function checkPassword (e) {
   if(!password.value.match (/^[A-Za-z]\w{7,14}$/)) {
      passwordError.innerHTML = 'The password must consist of 8 characters';
      passwordError.style.fontSize = '12px';
      password.style.borderColor =  'red';
      passwordError.style.color = 'red';
      return false

   }
   passwordError.innerHTML = ' ';
   password.style.borderColor =  'green';
   return true
 }
 password.addEventListener('input', checkPassword)



// რეგისტაციის შემდგომ შეტყობინება და შემოწმება 
 

 

 registerBtn.addEventListener('click', () => {
  const firstName = document.getElementById('firsname').value
  const lastName = document.getElementById('surName').value
  const email =  document.getElementById('email').value
  const password =  document.getElementById('password').value

   if(firstName ==  '' || lastName == '' || email == ''|| password == '' )  {
      alert ('All input fields must be filled');
   }else  {
      alert('Congratulations, you have successfully registered');
   }

 })

function showBurgerMenu  () {
    navigation.classList.add('show')
}
function closeBurgerMenu  () {
  navigation.classList.remove('show')
}



closeMenu.addEventListener('click', closeBurgerMenu)
burgerMenu.addEventListener('click', showBurgerMenu)






 
const searchBtn =  document.getElementById('searchBtn');
const heading  = document.querySelector('.heading');
const text = document.querySelector('.text');
 
 
searchBtn.addEventListener('click', () => {
    let input =  document.getElementById('search').value;

    if(input !== "") {
      let regExp  =  new RegExp(input, 'gi');
      text.innerHTML = text.textContent.replace(regExp, "<mark>$&</mark>")
     
    }


})