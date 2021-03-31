import $ from 'jquery';

export default class Elements {
    static getElements(response, country, amount){
        let final = Math.round((amount * (`${response.conversion_rates[country]}`)));
        $('.showConversion').text(`$${amount} USD is worth ${final} ${country}!`);
    }

}

