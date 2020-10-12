import { module, test } from 'qunit';
import { formatNumber} from 'csc511-assignment-4-october-7/helpers/format-number';

module('Unit | Helper | format number', function(hooks) {

  test('format number with currency sign',function(assert){
    assert.equal(formatNumber([65]),'$65.00','The number was formatted correctly');
  });

});
