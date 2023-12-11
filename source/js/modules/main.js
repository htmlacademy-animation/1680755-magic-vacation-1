export default () => {
  const body = document.querySelector(`.main`);
  // const screenFooter = document.querySelector(`.js-footer`);
  // const logo = document.querySelector(`.js-logo`);
  // const nav = document.querySelector(`.js-nav`);

  window.addEventListener(`load`, () => {
    body.classList.add(`main--is-loaded`);
    // nav.classList.add(`page-header__nav--is-visible`);
    // logo.classList.add(`page-header__logo--is-visible`);
    // screenFooter.classList.add(`screen__footer--is-visible`);
  });
};
