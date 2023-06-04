$(document).ready(init);

function init () {
    const amenObj = {};
    $('.amenities .popover input').change(function () {
        if($(this).is(':checked')) {
            amenObj[$(this).attr('data-name')] = $(this).attr('data-id');
        } else if ($(this).is(':not(:checked')) {
            delete amenObj[$(this).attr('data-name')];
        }
        const names = Object.keys(amenObj);
        $('.amenities h4').text(names.sort().join(', '));
    });
}