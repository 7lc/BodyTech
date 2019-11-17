$(document).ready(function() {
    $('#submit_button').click(function() {
        $('#email_form').attr('action',
                       'mailto:cuilongchang@gmail.com?subject=' +
                       $('#email_subject').val()+ '&body=' + $('#email_message').val());
        $('#email_form').submit();
    });
});