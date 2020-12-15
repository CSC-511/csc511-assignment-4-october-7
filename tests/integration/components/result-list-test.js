import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | result-list', function(hooks) {
  setupRenderingTest(hooks);
 
  test('The result renders correctly.', async function(assert) {
    this.set('resultList',[{currOwedMoney:0, name:"Coco",owedMoney:50,transaction:[{credit:50,id:"Mike"}]}]);
  
    await render(hbs`<ResultList 
    @resultList={{this.resultList}}
    />`);
    debugger;

    assert.equal(this.element.querySelector('[data-test-font-color]').getAttribute('class'),'green',"Font green");


  });
});
