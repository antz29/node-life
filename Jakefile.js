var exec = require('child_process').exec;

desc('This is the default task.');
task('default', ['lint','test'], function (params) {
  
});

desc('Run the tests');
task('test', [], function (params) {
	exec('./node_modules/expresso/bin/expresso', function (error, stdout, stderr) { 
		console.log(stdout); 
		console.log(stderr); 			
	});	
});
