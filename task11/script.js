var users=[
	{
		name: 'John',
		second: 'Second',
		info: 'Likes sport',
		avatar: 'img/avatar1.ico',
		info1 : 'img/info1.png',
		info2 : 'img/info2.png',
		info3 : 'img/info3.jpg'
	},
	{
		name: 'Pavel',
		second: 'Second',
		info: 'Likes travelling',
		avatar: 'img/avatar2.ico',
		info1 : 'img/info4.png',
		info2 : 'img/info5.png',
		info3 : 'img/info6.png'
	},
	{
		name: 'Igor',
		second: 'Second',
		info: 'Drinks a lot',
		avatar: 'img/avatar3.ico',
		info1 : 'img/info7.png',
		info2 : 'img/info8.jpg',
		info3 : 'img/info9.jpg'
	}
];

var usersList = document.getElementById('usersListNode');
var userInfoNode = document.getElementById('userInfoNode');

function drawUsers(usersList){
		var tmpl = document.getElementById("name").innerHTML;
		var html = Mustache.to_html(tmpl,{"users":users});
		document.getElementById("usersListNode").innerHTML= html;
}
var selectedUser;

selectUser = function(li ){
		if(selectedUser){
			selectedUser.classList.remove('userActive');
		}
		users.filter(function(user){
				if(user.name === li.innerHTML){
						var info = document.getElementById("info").innerHTML;
						var infoHtml = Mustache.to_html(info,user);
						document.getElementById("userInfoNode").innerHTML=infoHtml;
				}
		})
		li.classList.add('userActive');
		selectedUser = li;
}

