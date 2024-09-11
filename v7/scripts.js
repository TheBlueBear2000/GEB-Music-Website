emailjs.init('hA9YkxaPwQJVF6Cw5');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Send the email using EmailJS
    emailjs.send('service_jbobs4f', 'template_sr7okot', {
      name: name,
      email: email,
      message: message
    }).then(function(response) {
      alert('Email sent successfully!');
    }, function(error) {
      alert('Error sending email: ' + error);
    });
  });







// GALLERY PICKING FUNCTION

function pick_gallery() {
  let gallery = document.getElementById('gallery_list');

  //const total_images = fs.readdirSync("images/gallery").length; // Get number of images in gallary directory
  //const randomArray = getRandomArray(10, 21); // Make list of ten

  const numbers = Array.from({ length: 21 }, (v, i) => i);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];  // Swap elements
  }

  let out_string = '';
  for (let i=0; i < 10; i++) {
    out_string += `<img src="images/gallery/IMG_${numbers[i]}.jpg" alt="Gallery image" class="gallery-img"></img>\n`
  }

  gallery.innerHTML = out_string;
  //console.log(randomArray);


  // Zoomed image
const images = document.querySelectorAll('.gallery-img');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('img');
const closeBtn = document.getElementById('close-btn');

images.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    overlay.style.display = 'block';
    setTimeout(() => {
      modal.style.opacity = '1';
      modal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);
  });
});

function closeOverlay() {
  modal.style.opacity = '0';
  modal.style.transform = 'translate(-50%, -50%) scale(0)';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 10);
  overlay.removeEventListener('click', closeOverlay);
}

closeBtn.addEventListener('click', () => {
  closeOverlay();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeOverlay();
  }
});

overlay.addEventListener('click', () => {
  closeOverlay();
});

}