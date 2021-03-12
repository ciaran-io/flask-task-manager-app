$(document).ready(function () {
  $('.sidenav').sidenav({ edge: 'right' }); // open mobile nav from the right side of screen
  $('.collapsible').collapsible(); // accordion
  $('.tooltipped').tooltip(); // tooltip
  $('select').formSelect(); // form select
  $('.datepicker').datepicker({
    format: 'dd mmmm, yyyy',
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: 'Select',
    },
  }); // datepicker
});
