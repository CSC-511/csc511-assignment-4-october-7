import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users-total', function(hooks) {
  setupRenderingTest(hooks);

  test('UsersTotal Sucessfully Renders and has value', async function(assert) {
    await render(hbs`<Base />`);
    await fillIn('#name', 'Test Value');
    await fillIn('#event', 'Test Value');
    await fillIn('#cost', '0');
    await click('[add-button]');
    assert.dom('[total]').exists();
    assert.dom('[total]').hasText('The Current Total of the expenses are: $0');
  });
});