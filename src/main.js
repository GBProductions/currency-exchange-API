import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import ExchangeService from './js/exchange-service';

$("#submit").click(function(event){
    event.preventDefault();
    let currency = $("#currencyInput").val();
    $("#currencyInput").val("");

    console.log(currency);
});
