import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service';

function getElements(response){
    
}

$("#submit").click(function(event){
    event.preventDefault();
    let country = $("#currencyInput").val();
    $("#currencyInput").val("");

    ExchangeService.getExchange(country)
        .then(function(response) {
            getElements(response);
        });
});
