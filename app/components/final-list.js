import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FinalListComponent extends Component {
    constructor(){
        super(...arguments);
    }

    updatedSharedExpenses = this.args.sharedArr;
    @tracked finalList = [];

    @action tallyUp(){
        this.finalList.clear();
        let totalPaid = 0;
        for(let i = 0; i < this.updatedSharedExpenses.length; i++){
            totalPaid += parseFloat(this.updatedSharedExpenses[i].spent);
        }

        totalPaid = totalPaid / this.updatedSharedExpenses.length

        for(let i = 0; i < this.updatedSharedExpenses.length; i++){
            let object = {
                name: this.updatedSharedExpenses[i].name,
                owes: this.updatedSharedExpenses[i].spent - totalPaid
            };

            this.finalList.pushObject(object);
        }
    }
}
