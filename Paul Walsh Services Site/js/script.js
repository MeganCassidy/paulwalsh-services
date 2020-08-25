// Scripts for Landing Page 
let contactBtn = document.querySelector('.contact');
let phone = document.querySelector('.phone');
let work = document.querySelector('.work-btn');



contactBtn.addEventListener('click', function () {
    contactBtn.style.display = 'none';
    phone.style.display = 'block';
});

work.addEventListener('click', function() {
    window.location.href = "services.html";
});

