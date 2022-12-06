const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
/*const startQuote = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
/*const phoneNumber = document.getElementById('phone-number');
const idNumber = document.getElementById('id-number');
const address = document.getElementById('address');
const regNumber = document.getElementById('reg-number')
const dropdown = document.getElementById('dropdown');
const checkbox = document.getElementById('checkbox');
const townLabel = document.getElementById('town-label');
const numberApiaries = document.getElementById('number-apiaries');*/

  hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active'); 
})

document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

/*startQuote.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const errMsg = (element, message) => {
    const inputControl = element.parentElement;
  const errDisplay = inputControl.querySelector('.error');

  errDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
   const inputControl = element.parentElement;
  const errDisplay = inputControl.querySelector('.error');

  errDisplay.innerText = '';
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  /*const addressValue = address.value.trim();
  const regnumberValue = regNumber.value.trim();
  const townlabelValue =townLabel.value.trim();

  if(firstNameValue === '') {
    errMsg(firstName, 'First Name is required!');
  }else {
    setSuccess(firstName);
  }
  if(lastNameValue === '') {
    errMsg(lastName, 'Last Name is required!');
  }else {
    setSuccess(lastName);
  }
  if(emailValue === '') {
        errMsg(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        errMsg(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
  };*/
