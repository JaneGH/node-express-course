document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const messageElement = document.getElementById('message');
  messageElement.textContent = 'message:';


  try {
    const response = await fetch('http://localhost:3000/api/v1/login', { // Updated URL
      method: 'POST', // Ensure this is POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
   

    if (response.ok) {
      messageElement.textContent = 'Login successful!';
      localStorage.setItem('token', data.token); // Save token to localStorage
      window.location.href = 'hello.html';
    } else {
      messageElement.textContent = `Error: ${data.message}`;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
