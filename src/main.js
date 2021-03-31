import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';
import Elements from './js/elements.js';

//Will clear input fields for user.
function clearFields() {
    $("#currencyInput").val("");
    $("#moneyInput").val("");
}


//UI Logic
$("#submit").click(function(event){
    event.preventDefault();
    let country = $("#currencyInput").val();
    let amount = parseInt($("#moneyInput").val());
    let USD = "USD";
    clearFields();


    ExchangeService.getExchange(USD)
        .then(function(response) {
            let final = Elements.getElements(response, country, amount);
            $('.showConversion').text(`$${amount} USD is worth ${final} ${country}!`);
        });
});
