chrome.contextMenus.create({
	'id':'yellow',
	'title':"create a sticky note",
	'contexts':["all"]
});
chrome.contextMenus.create({
	'id':'green',
	'title':"add a reminder",
	'contexts':["all"]
});
chrome.contextMenus.create({
	'id':'red',
	'title':"add a precaution",
	'contexts':["all"]
});
chrome.contextMenus.create({
	'id':'white',
	'title':"add something",
	'contexts':["all"]
});
chrome.contextMenus.onClicked.addListener(function(info){
	if(info.menuItemId == 'green'){

	}else if(info.menuItemId == 'red'){

	}else if(info.menuItemId == 'yellow'){

	}else if(info,menuItemId == 'white'){
		
	}
});