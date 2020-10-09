import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | final-list', function(hooks) {
  setupRenderingTest(hooks);

  test('Final List Sucessfully Renders', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    // await render(hbs `<SplitwiseInfo @=splitwiseList />`)
    await render(hbs`<FinalList />`);
    assert.dom('i').exists();
    assert.dom('i').hasText('FINAL LIST');
  });


});