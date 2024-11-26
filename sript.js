document.getElementById('askForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');
  
    if (name && message) {
      // Create a heartfelt response
      responseMessage.innerHTML = `
        <strong>Hey ${name}!</strong><br>
        Your message was sent. Good luck, and we hope she says yes! ❤️
        <p><em>Your message: "${message}"</em></p>
      `;
    } else {
      responseMessage.innerHTML = `
        <strong style="color: red;">Please fill out all fields.</strong>
      `;
    }
  });
  