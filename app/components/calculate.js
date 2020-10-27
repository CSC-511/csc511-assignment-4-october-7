import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CalculateComponent extends Component 
{
    @tracked numOfPeople = [];

    constructor()
    {
        super(...arguments);
        this.numOfPeople = this.args.numOfPeople;
    }
    
    clearArrayAt(index)
    {
        this.numOfPeople.removeAt(index);
    }
    
    changeAmount(index, event)
    {
        // this.owes = [];
        // this.recieves = [];
        this.numOfPeople[index].bill = event.target.value;
        this.numOfPeople = this.numOfPeople;
    }
}
