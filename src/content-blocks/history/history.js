document.addEventListener('DOMContentLoaded', function() {
  document.body.onclick = click;
})

function click(event) {
  if(event.target.closest('.e-accordion__short')){
    showAccordeon(event.target);
  }
  if(event.target.closest('.onoffswitch')) {
    onoffswitch();
  }
} 

function showAccordeon(target) {
  target.nextElementSibling.classList.toggle('history__hide');
};
