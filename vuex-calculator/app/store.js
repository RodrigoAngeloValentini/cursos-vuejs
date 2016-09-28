import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    inline: "0",
    result: 0,
    lastElement: ""
};

const mutations = {
    ADD_ELEMENT(state, element){
        if (element === 0 && ['+', '-', '*', '/'].indexOf(state.lastElement) != -1) {
            return;
        }
        state.inline = state.inline == "0" ? element + "" : state.inline + element;
        state.lastElement = element;
    },
    RESULT(state){
        state.result = eval(state.inline);
        state.inline = state.result + "";
    },
    CLEAR(state){
        state.inline = "0";
        state.result = 0;
    }
};

export default new Vuex.Store({
    state,
    mutations
})