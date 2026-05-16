// script.js

// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform form validation or send data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Reset form
    form.reset();
    
    // Show success message
    alert('Thank you for your message!');
});
