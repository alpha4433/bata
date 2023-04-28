const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // You can add your authentication logic here
  console.log(email, password);
});
