import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | splitwise-info', function(hooks) {
  setupRenderingTest(hooks);

  test('SplitwiseInfo Sucessfully Renders', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    // await render(hbs `<SplitwiseInfo @=splitwiseList />`)
    // await render(hbs`<SplitwiseInfo />`);
    assert.dom('i').exists();
    assert.dom('i').hasText('Splitwise Info:');
  });

  test('Recurring Total Has Value', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    // await render(hbs `<SplitwiseInfo @=splitwiseList />`)
    // await render(hbs`<SplitwiseInfo />`);
    assert.dom('[total]').exists();
    assert.dom('[total]').hasAnyText();
  });

  test('Number of People Displays A Value', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    // await render(hbs `<SplitwiseInfo @=splitwiseList />`)
    // await render(hbs`<SplitwiseInfo />`);
    assert.dom('[numPpl]').exists();
    assert.dom('[numPpl]').hasAnyText();
  });

  test('Total Cost Divided By Guests Displays A Value', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    // await render(hbs `<SplitwiseInfo @=splitwiseList />`)
    // await render(hbs`<SplitwiseInfo />`);
    assert.dom('[avg]').exists();
    assert.dom('[avg]').hasAnyText();
  });

  

});