var hello = function() {
	return this;
};
var conf = {
	'index' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['hello'];
			return self.render('hello', data);
		});
	},
	'get' : function(){
		var data = {'date' : '/content'};
		this.ajaxTo(data);
	}
};
exports.__create = controller.__create(hello, conf);