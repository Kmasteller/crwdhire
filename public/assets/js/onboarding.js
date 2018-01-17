document.querySelectorAll('.onboarding-card__arrow').forEach(function (arrow) {
      var target = document.querySelector(arrow.dataset.target);
      arrow.addEventListener('click', function (e) {
        document.querySelector('.visible-card').classList.remove('visible-card');
        target.classList.add('visible-card');
      }, false);
    });