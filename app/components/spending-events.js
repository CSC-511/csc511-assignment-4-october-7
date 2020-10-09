import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SpendingEventsComponent extends Component {
    constructor(){
        super(...arguments);
    };

    updatedSharedExpenses = this.args.sharedArr;

    @action removeExpense(index){
        this.updatedSharedExpenses.removeAt(index);
    };

}
