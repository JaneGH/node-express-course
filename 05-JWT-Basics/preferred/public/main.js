document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/v1/login', { // Updated URL
      method: 'POST', // Ensure this is POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    const messageElement = document.getElementById('message');

    if (response.ok) {
      messageElement.textContent = 'Login successful!';
      localStorage.setItem('token', data.token); // Save token to localStorage
    } else {
      messageElement.textContent = `Error: ${data.message}`;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
