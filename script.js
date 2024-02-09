document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribe').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
        
            alert('Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message ' + email);
        } else {
            
            alert('Error! Please enter a valid email address.');
        }
    });
});