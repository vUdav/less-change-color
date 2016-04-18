jQuery(document).ready(function(){
	changeColor()
});

// Change color
function changeColor() {
	var el = $('#color-picker');
	el.on('change',function(){
		var color = el.val();
		less.modifyVars({
			'@brand-primary-color': color
		});
	})
}