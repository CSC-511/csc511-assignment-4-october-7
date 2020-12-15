import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const inputEvent=document.createEvent("HTMLEvents");
inputEvent.initEvent("input",false,true);

module('Integration | Component | add-spending-events', function(hooks) {
  setupRenderingTest(hooks);

  test('The spending table renders as expected', async function(assert) {
    this.set('rows',[]);
    this.set('currentSpendingEvent',"");
    this.set('currentPaidBy',"");
    this.set('currentExpense',"");
    this.set('changeSpendingEvent',function(event){ this.set('currentSpendingEvent',event.target.value)}); 
    this.set('changeCurrentPaidBy',function(event){this.set('currentPaidBy',event.target.value)});
    this.set('changeCurrentExpense',function(event){this.set('currentExpense',event.target.value)});
    this.set('addRowtoEventsTable',function(){
      var mRow={};
      mRow.spendingEvent = this.currentSpendingEvent;
      mRow.paidBy = this.currentPaidBy;
      mRow.expense = parseFloat(this.currentExpense);
      this.rows.pushObject(mRow);
      this.set('currentSpendingEvent',"");
      this.set('currentPaidBy',"");
      this.set('currentExpense',"");
    });
    this.set('removeRowFromEventsTable',function(){
      var index = document.getElementById("btnRemoveEvent").value;
      this.rows.removeAt(index);
    });
    this.set('spendingEventsCanBeAdded',true);

   //@hasNoParticipant={{this.HasNoParticipant}} 

    await render(hbs`<AddSpendingEvents 
    @rows={{this.rows}} 
    @currentSpendingEvent={{this.currentSpendingEvent}}
    @currentPaidBy={{this.currentPaidBy}}
    @currentExpense={{this.currentExpense}}
    @changeSpendingEvent={{action changeSpendingEvent}}
    @changeCurrentPaidBy={{action changeCurrentPaidBy}}
    @changeCurrentExpense={{action changeCurrentExpense}}
    @addRowtoEventsTable={{action addRowtoEventsTable}}    
    @removeEvent={{action removeRowFromEventsTable}}
    @spendingEventsCanBeAdded={{this.spendingEventsCanBeAdded}}
    />`);
    debugger;
    const currEventInput=this.element.querySelector('[data-test-currEvent-input]');
    currEventInput.value='Dinner';
    currEventInput.dispatchEvent(inputEvent);

    const currPaidByInput=this.element.querySelector('[data-test-currPaidBy-input]');
    currPaidByInput.value='Person A';
    currPaidByInput.dispatchEvent(inputEvent);

    const currExpenseInput=this.element.querySelector('[data-test-currExpense-input]');
    currExpenseInput.value=150;
    currExpenseInput.dispatchEvent(inputEvent);

    this.element.querySelector('[data-test-addEvent-btn]').click();
    const list = this.element.querySelector('[data-test-spendingevents-list]');
    const listItems=list.getElementsByTagName('td'); 
    assert.equal(listItems.length, 4, 'one spending event added to list');
    assert.ok(listItems[0].textContent.includes('Dinner'));
    assert.ok(listItems[1].textContent.includes('Person A'));
    assert.ok(listItems[2].textContent.includes('$150'));
    assert.ok(listItems[3].textContent.includes('Delete'));
  });

  test('A spending event was removed successfully.', async function(assert) {
    this.set('rows',[
    {
      spendingEvent:'Dinner',
      paidBy:'Person A',
      expense:100
    },
    {
      spendingEvent:'Movie',
      paidBy:'Person B',
      expense:50
    },  
    {
      spendingEvent:'Snack',
      paidBy:'Person C',
      expense:30
    }
  ]);

  this.set('removeRowFromEventsTable',function(){
    var index = document.getElementById("btnRemoveEvent").value;
    this.rows.removeAt(index);
  });

    await render(hbs`<AddSpendingEvents 
    @rows={{this.rows}} 
    @removeEvent={{action removeRowFromEventsTable}}
    />`);
    debugger;
    const removeEventBtn=this.element.querySelector('[data-test-removeEvent-btn]');
    removeEventBtn.value=1;
    this.element.querySelector('[data-test-removeEvent-btn]').click();
    const list = this.element.querySelectorAll('[data-test-spendingevents-list]');
     assert.ok(list[1].textContent.includes('Snack'));

  });

});
