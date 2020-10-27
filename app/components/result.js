import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class ResultComponent extends Component 
{

    @tracked numOfPeople = [];
    constructor()
    {
        super(...arguments);
        this.numOfPeople = this.args.numOfPeople;
    }

}
