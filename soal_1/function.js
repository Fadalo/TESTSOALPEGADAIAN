

exports.CEK_MIN = function (data) {
  var min = data[0];
  data.forEach(myFunction);
  function myFunction(item, index) {
	
	if ( min < item){
		min = min;
		
	}
	else{
		min = item;
	}
	
  
  }
  return min;
};
exports.CEK_MAX = function (data) {
  var max = data[0];
  data.forEach(myFunction);
  function myFunction(item, index) {
	
	if ( max > item){
		max = max;
		
	}
	else{
		max = item;
	}
	
  
  }
  return max;
}