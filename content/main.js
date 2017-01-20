var data;
var purl = window.location.href;
$(document).ready(function(){
	chrome.storage.local.get(purl,function(content){
		data = content;

		for(var key in content[purl]){
			var div = createNew();
			divid = key;
			div.id = divid;
			div.getElementsByClassName('NotexyzText')[0].value = content[purl][key]["text"];
			div.getElementsByClassName('NotexyzTitle')[0].value = content[purl][key]["title"];

			//add dragable
			$(div).draggable();
			//position

			
			var textElement = div.getElementsByClassName('NotexyzText')[0];
			//textfocus
			$(textElement).bind('click',function(){
				$(this).focus();
			});
			//ontextchange
			$(textElement).change(function(){
				if(data[purl] == undefined)
					data[purl] = {};
				
				if(data[purl][divid] == undefined)
					data[purl][divid] = {};
			
				data[purl][divid]['text'] = this.value;
				chrome.storage.local.set(data);
			});

			//ontitlechange
		
			var titleElement = div.getElementsByClassName('NotexyzTitle')[0];
			$(titleElement).change(function(){
				if(data[purl] == undefined)
					data[purl] = {};
			
				if(data[purl][divid] == undefined)
					data[purl][divid] = {};
			
				data[purl][div.id]['title'] = this.value;
				chrome.storage.local.set(data);
			});

			//delete
			div.getElementsByClassName('NotexyzDel')[0].addEventListener('click',function(){
					div.remove();
					var purl = window.location.href;
					var cont = {'$':'$'};
					chrome.storage.local.get(purl,function(obj){
						delete obj[purl][divid];
						chrome.storage.local.set(obj);
					});
				
			});


			document.getElementsByTagName('body')[0].appendChild(div);

		}
		
	});

});

chrome.runtime.onMessage.addListener(function(message, sender, response){
	if(document.readyState === 'complete'){
		if(message.type == 'note'){

			var divid = 'i'+(new Date).getTime(); 
			var div = createNew();
		//add draggable
			$(div).draggable();
		//position

		//textfocus
			var textElement = div.getElementsByClassName('NotexyzText')[0];
			$(textElement).bind('click',function(){
				$(this).focus();
			});
		//ontextchange
			var textElement = div.getElementsByClassName('NotexyzText')[0];
			textElement.value = '';
			$(textElement).change(function(){
				
				if(data[purl] == undefined)
					data[purl] = {};
				
				if(data[purl][divid] == undefined)
					data[purl][divid] = {};
				
			data[purl][divid]['text'] = this.value;
			chrome.storage.local.set(data);
		});
		//ontitlechange

		var titleElement = div.getElementsByClassName('NotexyzTitle')[0];
		titleElement.value = '';
		$(titleElement).change(function(){
			if(data[purl] == undefined)
				data[purl] = {};
		
			if(data[purl][divid] == undefined)
				data[purl][divid] = {};
		
			data[purl][div.id]['title'] = this.value;
			chrome.storage.local.set(data);
		});

		//delete
		div.getElementsByClassName('NotexyzDel')[0].addEventListener('click',function(){
			$(div).remove();
			var purl = window.location.href;
			var cont = {'$':'$'};
			chrome.storage.local.get(purl,function(obj){
				delete obj[purl][divid];
				chrome.storage.local.set(obj);
			});
				
		});
		document.getElementsByTagName('body')[0].appendChild(div);
	}

	}
	
});