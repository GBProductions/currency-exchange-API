import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Elements from './js/elements.js';
import Clear from './js/clear.js';


//UI Logic
$("#submit").click(function(event){
    event.preventDefault();
    let country = $("#currencyInput").val();
    let amount = parseInt($("#moneyInput").val());
    let USD = "USD";
    Clear.clearFields('');


    ExchangeService.getExchange(USD)
        .then(function(response) {
            Elements.getElements(response, country, amount);
        });
});

