import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | calc', function(hooks) {
  setupRenderingTest(hooks);

  test('Main Sucessfully Renders', async function(assert) {
    await render(hbs`<Calc />`);
    assert.dom('h1').exists();
    assert.dom('h1').hasText('CSC 511 - Assignment 4');
  });

  test('Add Button Click Removes Values in Input Fields', async function(assert) {
    await render(hbs`<Calc />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    const nameField = document.querySelector('#name');
    const eventField = document.querySelector('#event');
    const costField = document.querySelector('#cost');
    assert.ok(nameField.textContent.includes(''));
    assert.ok(eventField.textContent.includes(''));
    assert.ok(costField.textContent.includes(''));
  });


  });