const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // zabráni reloadu stránky

  const email = emailInput.value;

  if (!email.includes('@gmail.com')) {
    response.textContent = "Email musí obsahovať @gmail.com.";
    response.style.color = 'red';
  } else {
    response.textContent = "Ďakujeme! Tvoja správa bola odoslaná.";
    response.style.color = 'green';
    form.reset(); // vyčistí formulár
  }
});
