import { Tostada } from './tostada.js';

export class App {
  constructor(containerElem, iconsArr) {
    this.tostada = new Tostada({ position: 'top-right' });
    this.init(containerElem, iconsArr);
  }

  init(containerElem, iconsArr) {
    iconsArr.forEach(icon => {
      const iconElemContainer = document.createElement('article');
      const iconElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const iconText = document.createElementNS("http://www.w3.org/2000/svg", "text");

      iconElem.setAttribute("viewBox", "0 0 110 22");

      iconText.setAttribute("x", "50%");
      iconText.setAttribute("y", "50%");
      iconText.setAttribute("dominant-baseline", "middle");
      iconText.setAttribute("text-anchor", "middle");


      iconText.innerHTML = icon;
      iconElem.appendChild(iconText);
      iconElemContainer.appendChild(iconElem);

      iconElemContainer.addEventListener('click', this.handleClipboardCopy.bind(this));

      containerElem.appendChild(iconElemContainer);
    });
  }

  handleClipboardCopy(event) {
    const text = event.target.childNodes[0].textContent;
    // here's the actual clipboard code
    navigator.clipboard.writeText(text)
      .then(() => {
        this.tostada.show(`Copied ${text} to the clipboard!`, { displayTime: 1700 });
      })
      .catch(err => {
        this.tostada.show(`Something went wrong`, { displayTime: 1700 });
        console.log('err', err);
      });
    // /
  }
}

const icons = [
  '¯\\_(ツ)_/¯',
  '( ͡° ͜ʖ ͡°)',
  '(╯°□°)╯︵ ┻━┻',
  '(စ__စ )',
  'ಥ_ಥ',
  '(☉_☉)',
  '( •_•)'
];
const container = document.getElementById('shrugg-container');
new App(container, icons);