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
  if(target.classList.contains('history__show')) {
    if(!target.nextElementSibling.classList.contains('history__hide')) {
      target.nextElementSibling.classList.toggle('history__hide');
      return;
    }
    document.querySelectorAll('.e-accordion__more').forEach(item => {
      if(!item.classList.contains('history__hide')) {
        item.classList.toggle('history__hide');
      }
    });
    target.nextElementSibling.classList.toggle('history__hide');
  }
  else {
    showAccordeon(target.parentElement);
  }
};
