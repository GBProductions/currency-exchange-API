import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Elements from './UI-logic/elements.js';
import Clear from './UI-logic/clear.js';


//UI Logic
$("#submit").click(function(event){
    event.preventDefault();
    let country = $("#currencyInput").val();
    let amount = parseInt($("#moneyInput").val());
    Clear.clearFields('');


    ExchangeService.getExchange()
    .then(function(response) {
        let final = Math.round((amount * (`${response.conversion_rates[country]}`)));
        Elements.getElements(country, amount, final);
    })
    .catch(function(error) {
        $('.showErrors').text(`${error}`);
      });
    });