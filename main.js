$(document).on('ready', function() {
  console.log('sanity check!');

  $('#link_email').on('click', function(){
    $('#new_link').append("<img src=assets/linkEmail2.jpeg>");
    $('#link_email').hide();
  })
});
