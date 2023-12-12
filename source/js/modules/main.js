export default () => {
  const body = document.querySelector(`.main`);

  window.addEventListener(`load`, () => {
    body.classList.add(`main--is-loaded`);
  });
};
