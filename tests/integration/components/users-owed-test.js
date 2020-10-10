import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users-owed', function(hooks) {
  setupRenderingTest(hooks);

  test('Users Owed Renders', async function(assert) {
    await render(hbs`<Base />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    assert.dom('p').exists();
  });

  test('Average Cost Displays a Value', async function(assert) {
    await render(hbs`<Base />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    assert.dom('[avg]').exists();
    assert.dom('[avg]').hasText('The average price Owed $0');
  });

  test('Final List of Users Owed Sucessfully Renders', async function(assert) {
    await render(hbs`<Base />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    assert.dom('i').exists();
    assert.dom('i').hasText('Who owes what is presented below');
  });
});
