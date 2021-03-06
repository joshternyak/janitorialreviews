const module = {
  init: () => {
    const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

    // eslint-disable-next-line array-callback-return
    dropdowns.map((dropdown) => {
      const toggle = dropdown.querySelector('.dropdown-toggle');

      if (toggle == null) {
        return;
      }

      toggle.addEventListener('click', () => {
        if (dropdown.classList.contains('open')) {
          dropdown.classList.remove('open');
        } else {
          dropdowns.map((x) => x.classList.remove('open'));
          dropdown.classList.add('open');
        }
      });
    });
  },
};

export default module;
