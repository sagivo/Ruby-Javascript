//General functions
function extendObject(obj, funcName, func, attr){
	Object.defineProperty(obj.prototype, funcName, {get: func});
}

function aliasFunc(obj, func, alias){
	extendObject(obj, alias, function(){return this[func]; });
}

//String functions
extendObject(String, 'titlize',function(){
	that = this;
	return $.map(that.split(' '), function(w){ 
		return w.charAt(0).toUpperCase() + w.slice(1);  
	}).join(' ');
});
extendObject(String, 'reverse',function(){ return this.split("").reverse().join(""); });
extendObject(String, 'chars',function(){ return this.split(""); });
extendObject(String, 'downcase',function(){ return this.toLowerCase(); });
extendObject(String, 'upcase',function(){ return this.toUpperCase(); });
extendObject(String, 'isEmpty',function(){ return !this || this.length == 0; });

//Number functions
extendObject(Number, 'seconds',function(){ return this; });
extendObject(Number, 'minutes',function(){ return this*60; });
extendObject(Number, 'hours',function(){ return this*60*60; });
extendObject(Number, 'days',function(){ return this * 24..hours; });
extendObject(Number, 'weeks',function(){ return this * 7..days; });
extendObject(Number, 'months',function(){ return this * 4..weeks; });
extendObject(Number, 'years',function(){ return this * 12..months; });
extendObject(Number, 'ago',function(){ return new Date(new Date() - this*1000); });
extendObject(Number, 'fromNow',function(){ return new Date(new Date().setSeconds(new Date().getSeconds() + this)); });
//akas
aliasFunc(Number, 'seconds', 'second');
aliasFunc(Number, 'minutes', 'minute');
aliasFunc(Number, 'hours', 'hour');
aliasFunc(Number, 'days', 'day');
aliasFunc(Number, 'weeks', 'week');
aliasFunc(Number, 'months', 'month');
aliasFunc(Number, 'years', 'year');
