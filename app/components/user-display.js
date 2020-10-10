import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class UserDisplayComponent extends Component {
    @tracked AllInfo = [];
    constructor(){
        super(...arguments)
        this.AllInfo = this.args.allInfo
        }

        clearIndex(index){
            this.AllInfo.removeAt(index);
        }
}

