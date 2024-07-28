document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for signing up with ${email}!`);
});

document.getElementById('contactSales').addEventListener('click', function() {
    alert('Contacting sales...');
});

document.getElementById('googleSignup').addEventListener('click', function() {
    alert('Signing up with Google...');
});

document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === document.getElementById('overlay')) {
        window.history.back();
    }
});
