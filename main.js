$(document).on('ready', function() {
  console.log('sanity check!');

  $('#link_email').on('click', function(){
    $('#new_link').show();
    $('#link_email').hide();
  })
});
