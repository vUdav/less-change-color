// Change color Less
function changeColorLess() {
	var el = $('#color-picker');
	el.on('change',function(){
		var color = el.val();
		less.modifyVars({
			'@brand-primary-color': color
		});
	})
}