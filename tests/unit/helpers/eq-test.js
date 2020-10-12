import { module, test } from 'qunit';
import { eq } from 'csc511-assignment-4-october-7/helpers/eq';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Unit | Helper | eq', function(hooks) {

  test('eq passed two equal numbers',function(assert){
    assert.equal(eq([8,8]),true,'numbers equal');
  });
  
  test('eq passed two unequal numbers',function(assert){
    assert.notOk(eq([8,9]),false);
  });
});
