function toggleAccordion(element) {
  let allContents = document.querySelectorAll('.accordion-content');
  let allHeaders = document.querySelectorAll('.accordion-header');

  allContents.forEach(content => {
      if (content !== element.nextElementSibling) {
          content.style.display = "none";
      }
  });

  allHeaders.forEach(header => {
      if (header !== element) {
          header.querySelector('.icon').textContent = '+';
      }
  });

  let content = element.nextElementSibling;

  if (content.style.display === "block") {
      content.style.display = "none";
      element.querySelector('.icon').textContent = '+';
  } else {
      content.style.display = "block";
      element.querySelector('.icon').textContent = '-';
  }
}

// handling Accordion black color when active and retrieving its previous color when closed
$('.accordion-header').click(function() {
    // If the clicked header is already active, remove the active class
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.accordion-header').removeClass('active');  // Remove active class from all headers
        $(this).addClass('active');                   // Add active class to the clicked header
    }
});