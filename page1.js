// main.js

function signInWithGoogle() {
    // Implement Google authentication logic here
    console.log('Signing up with Google...');
  }
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      return;
    }
  
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Please enter your email.';
      return;
    }
  
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Please enter your password.';
      return;
    }
  
    // Form is valid, proceed with submission or other actions
    console.log('Form submitted');
  });
  