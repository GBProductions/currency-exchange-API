import $ from 'jquery';

export default class Elements {
    static getElements(response, country, amount){
        if (country === "USD") {
            $('.showUSD').text(`Why are you trying to convert USD into USD?`);
        } else if (country !== ("AED" || "AFN" || "ALL" || "AMD" || "ANG")) {
            $('.showNotACountry').text(`Type in a real country!`);
        } else if (country === ("AED" || "AFN" || "ALL" || "AMD" || "ANG")) {
            let final = Math.round((amount * (`${response.conversion_rates[country]}`)));
            $('.showConversion').text(`$${amount} USD is worth ${final} ${country}!`);
        }
    }

}