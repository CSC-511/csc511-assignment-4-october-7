import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

class Person{
    @tracked name;
    @tracked purchase = 0;
}

export default class BaseComponent extends Component {
    @tracked listOfPeople = [];
    @tracked currentValue;

    constructor(){
        super(...arguments);
    }

    addPerson() {
        let name = this.currentValue;
        let unique = true;
        if(this.listOfPeople.length > 9){
            //alert("Only 10 names at a time can be added to the list!");
            unique = false;
        }
        else if(this.listOfPeople.length > 0){
            this.listOfPeople.forEach(person => {
                if(person.name === name){
                    //alert("Please use a unique name!");
                    unique = false;
                }
            });
        }
        if(unique){
            let person = new Person();
            person.name = name;

            this.addToArray(person);
        }   
    }

    addToArray(person){
        this.listOfPeople.pushObject(person);
        this.currentValue = '';
    }

    clearArray(){
        this.listOfPeople.removeAt(0,this.listOfPeople.length);
    }

    changeValueName(event){
        this.currentValue = event.target.value;
    }
}
