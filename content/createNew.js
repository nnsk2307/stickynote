function createNew(){
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



var text=document.createElement('textarea');
text.className='NotexyzText';
div.appendChild(text);

document.body.appendChild(div);


$(hmini).on('click',function(){
		$(text).toggle();
});

return div;

}

