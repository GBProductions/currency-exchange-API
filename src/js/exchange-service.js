import $ from 'jquery';

export default class ExchangeService {
    static getExchange() {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
            .then(function(response) {
                if (!response.ok) {
                    $(".showErrors").text(response.statusText);
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .catch(function(error) {
                $(".showErrors").text(error);
                return error;

            });
    }
}
