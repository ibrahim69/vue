import * as type from '../types'

const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    [type.STOCK_PORTFOLIO] (state, getters) {
        return state.stocks.map(stock => {
            // getters to get stock getter in modules/stocks
            const record = getters[type.STOCKS].find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    [type.FUNDS](state) {
        return state.funds;
    }
}

const mutations = {
    // { stockId, quantity, stockPrice } -> rever to components/stock.vue (order)
    [type.MUTATE_BUY_STOCKS]: (state, {stockId, quantity, stockPrice}) => {
        // stocks kembali ke stock.vue di folder component
        // element => element.id == stockId artinya ada return di depan
        // element => element.id == stockId || element =>  return element.id == stockId
        const record = state.stocks.find(element => element.id == stockId );
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },

    [type.MUTATE_SELL_STOCKS]: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(element => element.id == stockId );
        if (record.quantity != quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += stockPrice * quantity;
    },
    
    [type.MUTATE_SET_PORTFOLIO] (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
}

const actions = {
    [type.ACTION_SELL_STOCKS] : ({commit}, order) => {
        commit(type.MUTATE_SELL_STOCKS, order);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}