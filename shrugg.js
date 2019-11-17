class Shrugg {
  constructor(containerElem, iconsArr) {
    this.init(containerElem, iconsArr)
  }

  init(containerElem, iconsArr) {
    iconsArr.forEach(icon => {
      const iconElemContainer = document.createElement('article');
      const iconElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const iconText = document.createElementNS("http://www.w3.org/2000/svg", "text")

      iconElem.setAttribute("viewBox", "0 0 110 22");

      iconText.setAttribute("x", "50%");
      iconText.setAttribute("y", "50%");
      iconText.setAttribute("dominant-baseline", "middle");
      iconText.setAttribute("text-anchor", "middle");


      iconText.innerHTML = icon;
      iconElem.appendChild(iconText);
      iconElemContainer.appendChild(iconElem);

      iconElemContainer.addEventListener('click', this.handleClipboardCopy);

      containerElem.appendChild(iconElemContainer);
    });
  }

  handleClipboardCopy(event) {
    navigator.clipboard.writeText(event.target.childNodes[0].textContent)
      .then(() => {
        console.log(event.target.childNodes[0].textContent);
      })
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }
}
const icons = [
  '¯\\_(ツ)_/¯',
  '( ͡° ͜ʖ ͡°)',
  '(╯°□°)╯︵ ┻━┻'
];
const container = document.getElementById('shrugg-container');