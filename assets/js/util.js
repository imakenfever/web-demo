/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function debug() {
  var a = 'hoge';
  var b = 'fuga';
  var c = 1;
  var d = 2;
  var e = 1;

  console.assert(c === e);
  console.assert(c === d);

  console.debug('Debug Message');

  console.error('Error Message');

  console.info('Info Message');

  console.log('Log Message');
  console.log("%s Message %s Message", a, b);
  console.log(a + " Message " + b +" Message");

  console.warn('Warn Message');

  console.trace();

  console.dirxml(document.body);
  for (var i = 0; i < 3; i++) {
    console.count();
  }

  console.group('Group Message');
  console.log('Log Message in Group Message');
  console.warn('Warn Message in Group Message');
  console.groupEnd();

  console.groupCollapsed('Group Message Collapsed');
  console.log('Log Message in Group Message');
  console.warn('Warn Message in Group Message');
  console.groupEnd();

  console.time('timer');
  console.timeEnd('timer');

  console.profile();
  var div = document.querySelectorAll('div.hoge1, div.hoge2');
  for (var i = 0; i < div.length; i++) {
    window.alert(div[i].innerHTML);
  }
  console.profileEnd();

}

function isHanKana(str){
  var reg = new RegExp(/^[ｦ-ﾟ]*$/);
  return reg.test(str);
}

function test(){
  var tx = document.getElementById("txt1").value;
  document.getElementById("area1").innerText = isHanKana(tx)?"半角カナのみです":"半角カナではない文字が含まれます";
}
