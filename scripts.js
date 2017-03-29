$(document).ready(function(){
      $('input[type="file"]').change(function(e){
          var fileName = e.target.files[0].name;
          console.log('The file "' + fileName +  '" has been selected.');
      });
  });


// practice printing inputs to console
$('#add').on('click', function () {
  var $inputTitle = $('#input-title').val();
  console.log($inputTitle);
  var $inputCaption = $('#input-caption').val();
  console.log($inputCaption);
});

// practice capturing input type file








// Start of Lindsay's prepend attempts
$('#add').click(function() {
  var $inputTitle = $('#input-title').val();
  var $inputCaption = $('#input-caption').val();
  // var $filePath = ....
  $('.cards').prepend("<div class='single-card'> \
  <h2 class='card-title'>" + $inputTitle + "</h2> \
  <img src='photos/fireworks.jpg' class='card-photo'/> \
  <p class='card-caption'>" + $inputCaption + "</p> \
  <p class='card-footer'> \
  <img src='images/delete.svg' alt='trash can icon- delete' class='card-icon' id='trash'> \
  <img src='images/favorite.svg' alt='heart icon- save as a favorite' class='card-icon' id='heart'> \
  </p> \
  </div>" )
});
