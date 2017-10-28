/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectOptionCount = 3;

$(window).on('load', function () {
  createSelectOption();
});

function createSelectOption() {
  var selectObj = $('#targetSelect');

  for (var i = 0; i < selectOptionCount; i++) {
    var option = $('<option>');
    option.html(i);
    selectObj.append(option);
  }
}
