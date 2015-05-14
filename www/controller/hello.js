var hello = function() {
	return this;
};
var conf = {
	'index' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['hello', 'bootstrap'];
			return self.render('hello', data);
		});
	}
};
exports.__create = controller.__create(hello, conf);