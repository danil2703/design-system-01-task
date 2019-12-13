function onoffswitch() {
    document.querySelectorAll('.theme').forEach(element => {
      element.classList.toggle('theme_color_project-default');
      element.classList.toggle('theme_color_project-inverse');
    })
  };
document.body.onclick = function(event) {
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