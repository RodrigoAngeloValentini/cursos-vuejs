export default {
    props: ['inline'],
    template: require('html!./result.component.html'),
    vuex: {
        getters : {
            inline: function(state){
                return state.inline;
            }
        }
    }
}