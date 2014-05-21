
$( document ).ready(function() {
	// Import the rest of the functions
	
	
	console.log( "ready!" );
	
	$.get("other/AblParser.bnf", function(data){
		alert("Data Loaded..." + data);
		parseABL(data);
	});
	/*
	$.get("other/AblParser.bnf", function(data){
	  alert("Data Loaded..." + data);
	  var ast = prettybnf.parse(data);
	  console.log(ast);
	});
	*/
});

var parseABL = function(fs){
	
};
