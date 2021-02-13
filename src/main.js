import Calculator from './planets.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#planetVariables").submit(function() {
  let age = parseInt($('#userAge').val());
  let sex = $('#userSex').val();
  let continent = $('#userContinent').val();
  let planet = $('#userPlanet').val();


  let ageCalculator = new Calculator(age,sex,continent,planet);
  
})