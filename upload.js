function readURL(input) {

  var reader = new FileReader();

  reader.onload = function(e) {
    $('.image-upload-wrap').hide();

    $('.file-upload-image').attr('src', e.target.result);
    $('.file-upload-content').show();

    $('.image-title').html(input.files[0].name);
  };

  reader.readAsDataURL(input.files[0]);

}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});

function uploadFile(){
  var uploadedFile = $('input[name=videofile]').val();
  var label = $('input[name=labelName]').val();
  var linkurl = $('input[name=urllink]').val();
}
