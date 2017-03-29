
















































// Start of Lindsay's prepend attempts
$('#add').click(function() {
  var $inputTitle = $('#input-title').val();
  var $inputCaption = $('#input-caption').val();
  $('.cards').prepend("<div class='single-card'><h2 class='card-title'>" + $inputTitle + "</h2><img src='photos/fireworks.jpg' class='card-photo'/><p class='card-caption'>" + $inputCaption + "</p><p class='card-footer'><img src='images/delete.svg' alt='trash can icon- delete' class='card-icon' id='trash'><img src='images/favorite.svg' alt='heart icon- save as a favorite' class='card-icon' id='heart'></p></div>" )
});
