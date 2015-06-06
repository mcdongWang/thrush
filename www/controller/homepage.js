var homepage = function() {
	return this;
};
var conf = {
	'index' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['homepage','bootstrap'];
			return self.render('homepage', data);
		});
	},
	'get' : function(){
		var data = {'date' : '/content'};
		this.ajaxTo(data);
	},
	'zf' : function(){
		var data = {'date' : '/zf'}
		this.ajaxTo(data)
	},
	'post' : function(){
		var data = {'date' : '/content'};
		this.ajaxTo(data);
	}
};
exports.__create = controller.__create(homepage, conf);