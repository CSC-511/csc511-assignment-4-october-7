import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputExpensesComponent extends Component {
    constructor(){
        super(...arguments);
    }

    @tracked sharedExpenses = [];
    @tracked name;
    @tracked event;
    @tracked spent;

    updateName(event){
        this.name = event.target.value;
    }

    updateEvent(event){
        this.event = event.target.value;
    }

    updateSpent(event){
        this.spent = event.target.value;
    }

    @action
    addExpense(){
        let object = {
            name: this.name,
            event: this.event,
            spent: this.spent
        };

        this.sharedExpenses.pushObject(object);
        this.name = '';
        this.event = '';
        this.spent = '';
    }
}
