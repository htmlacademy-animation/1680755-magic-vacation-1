export default () => {
  const body = document.querySelector(`.main`);

  window.addEventListener(`load`, () => {
    body.classList.add(`main--is-loaded`);
  });

  document.querySelectorAll(`a[href^="#"]`).forEach((anchor) => {
    anchor.addEventListener(`click`, (event) => {
      document.querySelector(event.target.getAttribute(`href`)).scrollIntoView();
    });
  });
};
