fml.define('page/hello', ['jquery'], function(require, exports) {
	$('.con').eq(0).show()
	$('.navList').on('click', function(){
		$('.con').hide().eq($(this).data('index')).show()
	})
});