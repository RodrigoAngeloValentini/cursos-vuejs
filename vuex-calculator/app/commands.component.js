export default {
    template: require('html!./commands.component.html'),
    data: function () {
        return {
            operators: ['+', '-', '*', '/'],
            commands: ['=', 'C']
        };
    },
    vuex: {
        actions: {
            addOperator(state,operator){
                state.dispatch('ADD_ELEMENT',operator);
            },
            callCommand(state,command){
                switch (command){
                    case '=':
                        state.dispatch('RESULT');
                        break;
                    case 'C':
                        state.dispatch('CLEAR');
                        break;
                }
            }
        }
    }
}