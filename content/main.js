$(document).ready(){
	var prul = window.location.href;
	var data = {};
	// duplicating stickys
	chrome.storage.local.get(purl,function(content){
		data = content;
		for(var key in content[purl]){
			// create
			var div = createNew();
			div['id'] = content[purl][key]['id'];
			//add textarea
			var text = div.getElementsByTagName('')
			//add title
			


		}


















	});

}