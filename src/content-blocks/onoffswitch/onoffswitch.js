function onoffswitch() {
    document.querySelectorAll('.theme').forEach(element => {
      if(!element.classList.contains('theme_color_project-warning') && !element.classList.contains('theme_color_project-brand')) {
        element.classList.toggle('theme_color_project-default');
        element.classList.toggle('theme_color_project-inverse');
      }
    })
  };