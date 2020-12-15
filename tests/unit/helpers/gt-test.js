import { module, test } from 'qunit';
import { gt } from 'csc511-assignment-4-october-7/helpers/gt';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Unit | Helper | gt', function(hooks) {

  test('gt passed two equal numbers',function(assert){
    assert.equal(gt([8,8]),false,'num 1 is not greater than num2');
  });

  test('gt passed two numbers',function(assert){
    assert.equal(gt([0,32]),false,'num 1 is not greater than num2');
  });
  
  test('gt passed two numbers',function(assert){
    assert.equal(gt([32,0]),true,'num 1 is greater than num 2');
  });
});
