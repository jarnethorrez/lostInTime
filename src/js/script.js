const $gears = document.querySelectorAll(`.gear`);

window.onscroll = () => {

  $gears.forEach($gear => {

    $gear.style.transform = `rotate(${window.scrollY / 3}deg)`;
    if (!$gear.classList.contains(`gearNoZ`)) {
      $gear.style.zIndex = -5;
    }

  });

};

