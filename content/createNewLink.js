function createNewLink(){
var div=document.createElement('div');
div.className='Notexyz';

var drag=document.createElement('div');
drag.className='Notexyzdragger';
div.appendChild(drag);

var head=document.createElement('div');
head.className='NotexyzHeader';
div.appendChild(head);



var htable=document.createElement('table');
htable.className='NotexyzTable';
head.appendChild(htable);


var htr=document.createElement('tr');
htr.className='NotexyzTr';
htable.appendChild(htr);



var htd1=document.createElement('td');
htd1.className='NotexyzTd1';
htr.appendChild(htd1);

var htd2=document.createElement('td');
htd2.className='NotexyzTd2';
htr.appendChild(htd2);


var htd3=document.createElement('td');
htd3.className='NotexyzTd3';
htr.appendChild(htd3);

var htitle=document.createElement('textarea');
htitle.className='NotexyzTitle';
htitle.maxLength=12;
htd1.appendChild(htitle);


var hmini=document.createElement('span');
hmini.className='NotexyzMini glyphicon glyphicon-minus-sign';
htd2.appendChild(hmini);


var hdel=document.createElement('span');
hdel.className='NotexyzDel glyphicon glyphicon-trash';
htd3.appendChild(hdel);



// var links=document.createElement('div');
// links.className='NotexyzLink';
// div.appendChild(links);


var footer=document.createElement('div');
footer.className='NotexyzFooter';

var about=document.createElement('input');
about.className="NotexyzAbout";
footer.appendChild(about);

var url=document.createElement('input');
url.className="NotexyzUrl";
footer.appendChild(url);

var button=document.createElement('button');
button.className="NotexyzButton";
footer.appendChild(button);

div.appendChild(footer);

document.body.appendChild(div);


$('.NotexyzMini').on('click',function(){
		$('.NotexyzText').toggle();
});


$('.NotexyzDel').on('click',function(){
		$('.Notexyz').remove();
});

$(div).draggable();

}
createNewLink();