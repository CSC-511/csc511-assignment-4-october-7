import { module, test } from 'qunit';
import { costBreakdownCalc } from 'csc511-assignment-4-october-7/helpers/cost-breakdown-calc';

module('Unit | Helper | cost breakdown calc', function(hooks) {

  var arrParticipants=['Coco','Tom','Mike'];
  var rows=[
    {paidBy:'Coco',expense:100, spendingEvent:'dinner'},
    {paidBy:'Tom',expense:50, spendingEvent:'movie'}
  ];

  var expectedResult=[
    {currOwedMoney:0, name:"Mike",owedMoney:-50,transaction:[{credit:-50,id:"Coco"}]},
    {currOwedMoney:0, name:"Tom",owedMoney:0,transaction:[]},
    {currOwedMoney:0, name:"Coco",owedMoney:50,transaction:[{credit:50,id:"Mike"}]}
  ];

  test('Break down the cost',function(assert){
    assert.equal(costBreakdownCalc([rows,arrParticipants]),expectedResult,'The cost was splited correctly');
  });
  
});
