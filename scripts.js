$('#add').click(function() {
    var $inputTitle = $('#input-title').val();
    var $inputCaption = $('#input-caption').val();
    var $filename = $('#choose').val().replace(/C:\\fakepath\\/i, 'photos/');

    $('.cards').prepend("<div class='single-card'> \
      <h2 class='card-title'>" + $inputTitle + "</h2> \
      <img src='" + $filename + "' class='card-photo'/> \
      <p class='card-caption'>" + $inputCaption + "</p> \
      <div class='card-footer'> \
      <div class='card-icons' id='trash'></div> \
      <div class='card-icons heart'></div> \
      </div> \
    </div>");

//practice-group
    // $('.heart').click(function() {
    //   $(this).toggleClass('heart-active');
    // });

//practice solo
    $('.heart').click(function() {
      $('.heart').removeClass('')

//example
//     $('a.btn').click(function(){
//   $("a.btn").removeClass("active focus");
//   $(this).toggleClass("active");
// });

// TRASH REMOVAL
//     $('#trash').click(function() {
//         $(this).parent().parent().remove();
//     });
// });
