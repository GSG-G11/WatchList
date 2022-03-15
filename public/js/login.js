const message = document.getElementById('message');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  message.textContent = '';

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email.includes('.com') || !email.includes('@')) {
    return (message.textContent = 'you should enter right email');
  }
  if (password.length < 8) {
    return (message.textContent = 'you should enter right password');
  }
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});