'use strict';

// nav handler
$('nav a').on('click', function () {
  debugger;
  let $whereToGo = $(this).data('tab');
  // what is $whereToGo
  // gives us 'delegation' or 'attributes'
  debugger;
  console.log('$where to go', $whereToGo);
  debugger;
  $('.tab-content').hide();
  // we want $('#delegation')
  debugger;
  $('#' + $whereToGo).fadeIn(750)
})

// event logger
function logTarget() {
  debugger;
  console.log('this', this);
  console.log('$(this)', $(this));
  debugger;
  let $target = $(this).text();
  debugger;
  let $newFeedback = $('#feedback p:first-child').clone();
  debugger;
  $newFeedback.text(`You clicked on ${$target}`);
  debugger;
  $('#feedback').append($newFeedback);
}

// not delegated - event bound to all the 'li's that exist on page load
// no selector specified in .on() method
$('#menu-main li').on('click', logTarget)

// delegated - event is bound to parent
// 'li' is specified in .on()
$('#menu-secondary').on('click', 'li', logTarget)

// button handlers
$('button[name=add-main]').on('click', function () {
  //.clone & .append allows you to make a copy of exisitng elements, (modify the new element), and append to the DOM
  let $newLi1 = $('#menu-main li:first').clone();
  $newLi1.text('New primary list item');
  $('#menu-main').append($newLi1);
});

$('button[name=add-secondary]').on('click', function () {
  let $newLi2 = $('#menu-secondary li:first').clone();
  $newLi2.text('New secondary list item');
  $('#menu-secondary').append($newLi2);
});

// .siblings allows you to identify and manipulate the sibling elements
$('button[name=clear]').on('click', function () {
  $('.log-item:first').siblings().remove();
});

// checkbox handler - change event.
// shows difference between attr & prop
$('input[name=check]').on('change', function () {
  let $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

// select box filtering
$('select[name="icecream"]').on('change', function () {
  let $selection = $(this).val();
  $('img').hide()
  $(`img[data-flavor="${$selection}"]`).show()
})

// DOM-ready function
$(document).ready(function () {
  $('.tab-content').hide()
})
