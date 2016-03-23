var users=[
	{
		name: 'John',
		second: 'Second',
		info: 'likes bowling',
		avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
		newfield: 'lplkmdijfn'
	},
	{
		name: 'Pavel1',
		second: 'Second',
		info: 'plays footbal',
		avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
		newfield: 'asdfgh'
	},
	{
		name: 'Igor',
		second: 'Second',
		info: 'drinks a lot',
		avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
		newfield: 'tptpktjjj'
	}
];

var usersList = document.getElementById('usersListNode');
var userInfoNode = document.getElementById('userInfoNode');

function drawUsers(usersList){
	usersList.forEach(drawOneUser);
}
var selectedUser;
function drawOneUser(userObject, index){
	var item= document.createElement('li');
	item.innerHTML = index + ':' + userObject.name;
	item.classList.add('user');
	/*if(content == 'John'){
		item.className += ' userWithBorder';
	}*/
	item.onclick = function(){
		if(selectedUser){
			selectedUser.classList.remove('userActive');
		}
		setUserInfo(userObject);    
		this.classList.add('userActive');
		selectedUser = this;
	}
	usersList.appendChild(item);
}

var template = userInfoNode.innerHTML;

setUserInfoNodeHTML('');

function setUserInfo(userObject){
	var newContent = template;

	var fields = Object.keys(userObject);
	fields.forEach(function(fieldName){
		newContent = newContent.replace('{{' + fieldName + '}}', userObject[fieldName]);
	});
	setUserInfoNodeHTML(newContent);
}

function setUserInfoNodeHTML(content) {
	userInfoNode.innerHTML = content;
}