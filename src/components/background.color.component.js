export class BackgroundColor {
  #body

  constructor() {
    this.#body = document.querySelector('body')
  }

  randomColor() {
    const rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    return (this.#body.style.background = rndColor)
  }

  randomGradient() {
    const direction = Math.round(Math.random() * 360)

    const r1 = Math.round(Math.random() * 255)
    const g1 = Math.round(Math.random() * 255)
    const b1 = Math.round(Math.random() * 255)
    const a1 = Math.round(Math.random() * 10) / 10

    const r2 = Math.round(Math.random() * 255)
    const g2 = Math.round(Math.random() * 255)
    const b2 = Math.round(Math.random() * 255)
    const a2 = Math.round(Math.random() * 10) / 10

    //Giving values to the linear gradiant.

    return (this.#body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))`)
  }
}