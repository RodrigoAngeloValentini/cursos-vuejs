import ResultComponent from './result.component';
import NumbersComponent from './numbers.component';
import CommandsComponent from './commands.component';

export default{
    template: require('html!./app.component.html'),
    components: {
        'result-component': ResultComponent,
        'numbers-component': NumbersComponent,
        'commands-component': CommandsComponent
    }
}