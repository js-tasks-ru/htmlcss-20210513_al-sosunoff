const changer = document.getElementsByClassName('theme-changer');
const html = document.documentElement;

Array.from(changer).forEach((item) => {
  item.addEventListener('change', function () {
    html.toggleAttribute('data-theme-dark');
  });
});
