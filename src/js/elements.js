export default class Elements {
    static getElements(response, country, amount){
        return (amount * (`${response.conversion_rates[country]}`));
    }

}

