import * as type from '../types'
import stocks from '../../data/stocks'

const state = {
    stocks: []
};

// GETTERS
const getters = {
    [type.STOCKS]: state => {
        return state.stocks;
    }
}

// MUTATIONS
const mutations = {
    [type.MUTATE_SET_STOCKS]: (state, stocks) => {
        state.stocks = stocks;
    },
    [type.MUTATE_RND_STOCKS]: (state) => {
        state.stocks.forEach( stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5 ))
        });
    }
}

// ACTIONS

const actions = {
    [type.ACTIONS_BUY_STOCKS]: ({commit}, order) => {
        // type.MUTATE_BUY_STOCKS get from modules/portfolio
        commit(type.MUTATE_BUY_STOCKS, order);
    },
    [type.ACTIONS_INIT_STOCKS]: ({commit}) => {
        commit(type.MUTATE_SET_STOCKS, stocks);
    },
    [type.ACTIONS_RANDOM_STOCKS]: ({commit}) => {
        commit(type.MUTATE_RND_STOCKS);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}