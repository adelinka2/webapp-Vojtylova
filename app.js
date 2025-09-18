form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // kontrola emailu
    if (!email.includes("@gmail.com")) {
      response.textContent = "Email musí obsahovať @gmail.com.";
      response.style.color = "red";
      return;
    }
  
    response.textContent = `Ďakujeme, ${name}! Tvoja správa bola odoslaná.`;
    response.style.color = "green";
  
    form.reset();
  });
  
