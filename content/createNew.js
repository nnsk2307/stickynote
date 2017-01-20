var div=document.createElement('div');
div.className='Notexyz';

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
htitle.maxLength=15;
htd1.appendChild(htitle);

var hmini=document.createElement('button');
hmini.className='NotexyzMini';
htd2.appendChild(hmini);

var span1=document.createElement('span');
span1.className='glyphicon glyphicon-minus-sign';
hmini.innerHTML=span1;

var hdel=document.createElement('button');
hdel.className='NotexyzDel';
htd3.appendChild(hdel);
var span2=document.createElement('span');
hdel.innerHTML=span2;



var text=document.createElement('textarea');
text.className='NotexyzText';
div.appendChild(text);

document.body.appendChild(div);


$('.NotexyzMini').on('click',function(){
		$('.NotexyzText').toggle();
});


$('.NotexyzDel').on('click',function(){
		$('.Notexyz').remove();
});
