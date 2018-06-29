$(document).ready(function(){



console.clear(); // Esto limpia la consola

$('#uploader').submit(function(evt){
  evt.preventDefault();
  
  // Create a reader
  var reader = new FileReader();
  
  // Get the image
  var file = $(evt.target).find('input[type="file"]').get(0).files[0];
  
  reader.readAsDataURL(file);
  
  reader.onload = function(e){
    console.log('The image was load');
    $('#image').attr('src', e.target.result);
  };
  
}); 

$('#nuevo-tweet').on('click', '.form-group', function(){
  $("body").append(

});
