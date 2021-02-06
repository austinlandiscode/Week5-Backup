export class Calculator {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  checkYears() {
    if (this.planet === "Mercury") {
      let yearsOnMercury = (Math.floor(this.age / 0.24));
      return yearsOnMercury;
    }
  }
}