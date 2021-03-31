import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service';

//Business Logic
function getElements(response, country, amount){
    $('.showConversion').text(amount * (`${response.conversion_rates[country]}`));
}

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
    console.log(amount);


    ExchangeService.getExchange(USD)
        .then(function(response) {
            getElements(response, country, amount);
        });
});
