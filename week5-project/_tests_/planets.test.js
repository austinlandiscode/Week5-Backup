import Person from './../src/planets.js'

describe ('Person', () => {

  test('should correctly create a person object with a name and age',() => {
    const person = new Person('testName', 'testAge');
    expect(person.name).toEqual('testName');
    expect(person.age).toEqual('testAge');
  });
});