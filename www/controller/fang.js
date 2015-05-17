var fang = function() {
	return this;
};
var conf = {
	'index' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['fang', 'swiper'];
			return self.render('fang', data);
		});
	}
};
exports.__create = controller.__create(fang, conf);