$().ready(function() {
	
	var postID = location.pathname.replace('/post/', '');
	$('#commentForm').on('submit', function(e) {
        e.preventDefault();
        var form = e.target;

        $.ajax({
          url: form.action,
          type: form.method,
          data: {
            name: form.name.value,
            text: form.text.value,
            email: form.email.value,
            website: form.website.value
          },
          complete: function(res, status) {
            if(status === 'success') {
			debugger;
              $('#commentsList').html(res.responseText);
              document.forms.commentForm.reset();
            } else {
              alert('comment failed');
              console.log(res, status);
            }
          }
        });
      });
});