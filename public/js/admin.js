$(function() {
	$('.del').click(function(e) {

		
		var target = $(e.target)
		var id = target.data('id')
		var tr = $('.item-id-' + id)
        console.log('data-id ' + id)
		$.ajax({
			type: 'DELETE',
			url: '/admin/list?id=' + id,
			success: function (results) {
				console.log('results ' + results)
				if (tr.length >= 0) {
					tr.remove();
					window.location.reload();
				}
    	
            }
		})
		// .done(function(results) {
		// 	console.log('results ' + results)
		// 	if(results.success == 1) {
		// 		if (tr.length > 0) {
		// 			tr.remove()
		// 		}
		// 	}
		// })

	})
})