// practice printing inputs to console
$('#add').on('click', function () {
  var $inputTitle = $('#input-title').val();
  console.log($inputTitle);
  var $inputCaption = $('#input-caption').val();
  console.log($inputCaption);
  // var $inputFileName = $('#choose').val();
  // console.log($inputFileName);
  $('.card-photo').attr('src',$('#choose').val());
});

// practice capturing input type file
