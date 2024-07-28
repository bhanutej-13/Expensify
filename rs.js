document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    this.setAttribute('aria-expanded', sidebar.classList.contains('active'));
});

document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.querySelector(".get-started-btn");
    const contactSalesBtn = document.querySelector(".contact-sales-btn");
    const googleSignupBtn = document.querySelector(".google-signup-btn");
    const inputField = document.querySelector(".input-field");

    getStartedBtn.addEventListener("click", function() {
        const userInput = inputField.value;
        if (userInput) {
            alert(`Get Started with: ${userInput}`);
        } else {
            alert("Please enter your email or phone.");
        }
    });

    contactSalesBtn.addEventListener("click", function() {
        alert("Contacting sales...");
    });

    googleSignupBtn.addEventListener("click", function() {
        alert("Signing up with Google...");
    });
});
/*1*/
document.addEventListener('DOMContentLoaded', function() {
    var getStartedButton = document.querySelector('.login .lbtn');
    var popup = document.getElementById('popup');
    var closePopupButton = document.getElementById('close-popup');

    getStartedButton.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

document.getElementById('over').addEventListener('click', function(event) {
    if (event.target === document.getElementById('over')) {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
        document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
    }
});