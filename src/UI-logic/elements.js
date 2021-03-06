import $ from 'jquery';

export default class Elements {
    static getElements(country, amount, final){
        if (country === "USD") {
            $(".showUSD").text(`Why are you trying to convert USD into USD?`);
            $(".showConversion").text("");
            $(".showErrors").text("");
            $(".showNotACountry").text("");
        } else if ((country === "AED") || (country === "AFN") || (country === "ALL") || (country === "AMD") || (country === "ANG")) {
            $(".showConversion").text(`$${amount} USD is worth ${final} ${country}!`);
            $(".showUSD").text("");
            $(".showErrors").text("");
            $(".showNotACountry").text("");
        } else {
            $(".showNotACountry").text(`Type in a real country!`);
            $(".showUSD").text("");
            $(".showConversion").text("");
            $(".showErrors").text("");
        }
    }

}
