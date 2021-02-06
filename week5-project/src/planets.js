export class Calculator {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  checkYears() {
    if (this.planet === 'Mercury') {
      let yearsOnMercury = (Math.floor(this.age / 0.24));
      return yearsOnMercury;
    } else if (this.planet === 'Venus') {
      let yearsOnVenus = (Math.floor(this.age / 0.62));
      return yearsOnVenus;
    } else if (this.planet === 'Mars') {
      let yearsOnMars = (Math.floor(this.age / 1.88));
      return yearsOnMars;
    } else if (this.planet === 'Jupiter') {
      let yearsOnJupiter = (Math.floor(this.age / 11.86));
      return yearsOnJupiter;
    }
  }
}