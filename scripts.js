$('#add').click(function() {
  var $inputTitle = $('#input-title').val();
  var $inputCaption = $('#input-caption').val();
  var $filename = $('#choose').val().replace(/C:\\fakepath\\/i, 'photos/');
  $('.cards').prepend("<div class='single-card'> \
    <h2 class='card-title'>" + $inputTitle + "</h2> \
    <img src='" + $filename + "' class='card-photo'/> \
    <p class='card-caption'>" + $inputCaption + "</p> \
    <p class='card-footer'> \
      <div id='trash'></div> \
      <div id='heart'></div> \
    </p> \
  </div>" )
});
