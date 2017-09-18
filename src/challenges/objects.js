
let Project = function({title, description, url, author} = {}) {
	const {title, description, url, author} = this;
	console.log(this);

}

let NikeRewardPro = new Project({title: 'Nike Reward Admin Tool', description: 'An admin tool for viewing rewards', url: 'http://www.github.com/nike/rewards', author: 'Owain Llewellyn'});

console.log(NikeRewardPro);