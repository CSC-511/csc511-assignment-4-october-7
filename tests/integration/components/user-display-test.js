import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-display', function(hooks) {
  setupRenderingTest(hooks);

  test('Display of user inputs Sucessfully Renders', async function(assert) {
    await render(hbs`<Base />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    await render(hbs`<UserDisplay />`);
    assert.dom('p').exists();
    assert.dom('p').hasText('Users entered:');
  });
});