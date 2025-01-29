
let lastScrollTop = 0; // Track the last scroll position
const topNavbar = document.querySelector('.top-nav'); // Top navbar element
const mainNavbar = document.querySelector('.navbar'); // Main navbar element
const topNavbarHeight = topNavbar.offsetHeight; // Height of the top navbar

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    topNavbar.classList.add('hidden'); // Hide the top navbar
    if (currentScroll > topNavbarHeight) {
      mainNavbar.classList.add('sticky'); // Make main navbar sticky
    }
  } else {
    // Scrolling up
    topNavbar.classList.remove('hidden'); // Show the top navbar
    if (currentScroll <= topNavbarHeight) {
      mainNavbar.classList.remove('sticky'); // Remove sticky if back to top
    }
  }

  // Prevent negative scroll values and update lastScrollTop
  lastScrollTop = Math.max(0, currentScroll);
});

// Toggle Password Visibility for Sign Up
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type; // Toggle password visibility
  });
  
  // Toggle Retype Password Visibility for Sign Up
  document.getElementById('toggle-retype-password').addEventListener('click', function() {
    const retypePasswordField = document.getElementById('retype-password');
    const type = retypePasswordField.type === 'password' ? 'text' : 'password';
    retypePasswordField.type = type; // Toggle password visibility
  });
  



 
// Toggle Password Visibility for Sign Up
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type; // Toggle password visibility
  });
  
  // Toggle Retype Password Visibility for Sign Up
  document.getElementById('toggle-retype-password').addEventListener('click', function() {
    const retypePasswordField = document.getElementById('retype-password');
    const type = retypePasswordField.type === 'password' ? 'text' : 'password';
    retypePasswordField.type = type; // Toggle password visibility
  });
  

  document.getElementById('commitmentForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ministry = document.getElementById('ministry').value;
    const message = document.getElementById('message').value;
  
    // Create PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.text('Commitment Form', 10, 10);
    pdf.text(`Name: ${name}`, 10, 20);
    pdf.text(`Email: ${email}`, 10, 30);
    pdf.text(`Phone: ${phone}`, 10, 40);
    pdf.text(`Ministry: ${ministry}`, 10, 50);
    pdf.text(`Message: ${message}`, 10, 60);
  
    // Save PDF
    pdf.save('commitment_form.pdf');
  });
  