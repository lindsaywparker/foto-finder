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
