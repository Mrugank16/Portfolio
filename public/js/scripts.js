document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
  
    progressBars.forEach(bar => {
      bar.style.transition = 'width 2s';
      bar.style.width = bar.getAttribute('data-width');
    });
  });

  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      event.preventDefault();
      alert('All fields are required.');
    }
  });
  
