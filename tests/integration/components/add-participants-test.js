import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const inputEvent=document.createEvent("HTMLEvents");
inputEvent.initEvent("input",false,true);

module('Integration | Component | add-participants', function(hooks) {
  setupRenderingTest(hooks);

  test('participants list renders as expected',async function(assert){        
    this.set('arrParticipants',[]);
    this.set('currentParticipant',"");
    this.set('changeParticipant',function(event){this.set('currentParticipant',event.target.value)});
    this.set('addToArrParticipants',function(){ 
      this.arrParticipants.pushObject(this.currentParticipant);
      this.set('currentParticipant',"");
    });
    this.set('participantsCanBeAdded',true);

    await render(hbs`<AddParticipants 
      @arrParticipants={{this.arrParticipants}}     
      @currentParticipant={{this.currentParticipant}} 
      @changeParticipant={{action changeParticipant}}
      @addToArrParticipants={{action addToArrParticipants}} 
      @participantsCanBeAdded={{this.participantsCanBeAdded}}
      />
    `);
      debugger;
    const participantInput=this.element.querySelector('[data-test-participant-input]');
    participantInput.value='Person A';
    participantInput.dispatchEvent(inputEvent);
    this.element.querySelector('[data-test-add-btn]').click();
    const list = this.element.querySelector('[data-test-participants-list]');
    const listItems=list.getElementsByTagName('li');
    assert.equal(listItems.length, 1, 'one participant added to list');
    assert.ok(listItems[0].textContent.includes('Person A'));
  });

});
