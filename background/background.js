chrome.contextMenus.create({
	'id':'note',
	'title':"create a sticky note",
	'contexts':["all"]
});

chrome.contextMenus.onClicked.addListener(function(info){
	if(info.menuItemId == 'note'){
		chrome.tabs.query({active:true,currentWindow:true},function(tabs){
			console.log(tabs);
			chrome.tabs.sendMessage(tabs[0].id,{'type':'note'});
		});
	}
});