document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribe').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
        
            window.location.href = 'confirmation.html';
        } else {
            
            alert('Error! Please enter a valid email address.');
        }
    });
});