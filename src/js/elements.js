import $ from 'jquery';

export default class Elements {
    static getElements(response, country, amount){
        if (country === "USD") {
            $(".showUSD").text(`Why are you trying to convert USD into USD?`);
            $(".showConversion").text("");
            $(".showErrors").text("");
            $(".showNotACountry").text("");
        } else if ((country === "AED") || (country === "AFN") || (country === "ALL") || (country === "AMD") || (country === "ANG")) {
            let final = Math.round((amount * (`${response.conversion_rates[country]}`)));
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
