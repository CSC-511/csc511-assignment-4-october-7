import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class CalculatorComponent extends Component {
    @tracked listOfPeople = [];

    constructor(){
        super(...arguments);
        this.listOfPeople = this.args.listOfPeople;
    }

    clearArrayIndex(index){
        this.listOfPeople.removeAt(index);
    }

    changeValue(index, event){
        //console.log(event.target.value);
        var val = event.target.value;
        if(val == ""){
            val = 0;
        }
        this.listOfPeople[index].purchase =  val;
        this.listOfPeople = this.listOfPeople;
    }
}
