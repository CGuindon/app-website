var $tabs = $('.tab');
var $tabPanels = $('.tab-panel'); /* This gives us access to our html */
var $circle = $('.circle');

$tabPanels.filter(':not([data-state="current"])').hide(); /* Hiding the ones that don't have the date-state='current' */

$tabs.on('click', function (eventObject) {
	var id = $(this).attr('href');
	eventObject.preventDefault();
	$tabPanels.filter('[data-state="current"]').hide(); /* makes current state hides */
	$(id).show().attr('data-state', 'current');

	$tabs.attr('data-state', ''); /* the empty '' could be not-current as well, this will make sure the highlight #ccc will change with the tab choice */
	$(this).attr('data-state', 'current');

});


