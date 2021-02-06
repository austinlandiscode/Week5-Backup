import {Calculator} from './../src/planets.js'

describe ('Calculator', () => {

  test('should correctly create a calculator object with a base age',() => {
    const calculator = new Calculator('testAge', 'testPlanet');
    expect(calculator.age).toEqual('testAge');
    expect(calculator.planet).toEqual('testPlanet');
  });

  test('should intake age and return years on Mercury', () => {
    const mercury = new Calculator(5, 'Mercury');
    expect(mercury.checkYears()).toEqual(20);

  });

    test('should take an age and return years on Venus', () => {
    const venus = new Calculator(5, 'Venus');
    expect(venus.checkYears()).toEqual();
    });
});