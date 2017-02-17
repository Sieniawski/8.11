var list = document.getElementById('List');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length + '</li>';})





