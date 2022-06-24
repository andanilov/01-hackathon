import {Module} from '../core/module'

export class ShapeModule extends Module {

  trigger() {
    document.body.insertAdjacentHTML('beforeend', `
    <svg xmlns="http://www.w3.org/2000/svg">
    <circle r="50" cx="50" cy="50" fill="red"/>
    <rect x="120" y="5" width="90" height="90"
            stroke="blue" fill="none"/>
    </svg>`);
  }

}