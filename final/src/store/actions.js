import * as type from './types'
import Vue from 'vue'

export default { 
    [type.ACTION_LOAD_DATA] : ({commit}) => {
        Vue.http.get('data.json')
            .then(response => response.json())
            .then(data => {
                if(data) {
                    const stocks = data.stocks;
                    const funds = data.funds;
                    const stockPortfolio = data.stockPortfolio;

                    const portfolio = {
                        funds,
                        stockPortfolio
                    }

                    // commit(type.STOCKS, stocks);
                    // commit(type.MUTATE_SET_STOCKS, stocks);
                    commit(type.MUTATE_SET_PORTFOLIO, portfolio);
                }
            })
    }
}