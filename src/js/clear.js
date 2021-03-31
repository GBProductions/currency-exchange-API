import $ from 'jquery';

export default class Clear {
    static clearFields() {
        $("#currencyInput").val("");
        $("#moneyInput").val("");
    }
}