import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | base', function(hooks) {
  setupRenderingTest(hooks);

  test(' Base Page Sucessfully Renders', async function(assert) {
    await render(hbs`<Base />`);
    assert.dom('h2').exists();
    assert.dom('h2').hasText('Daniel Dolan Assignment 3 CSC 511');
  });
  test('Add Button Click Removes Values in Input Fields', async function(assert) {
    await render(hbs`<Base />`);
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