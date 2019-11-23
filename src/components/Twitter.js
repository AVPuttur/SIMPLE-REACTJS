var React = require('react');

const sayReact = () => {
		console.log("React is woww!!!!");
	};

function Twitter () {
	return (
		<div className="twittr">
		<h1>This is a Twittr component</h1>
		<button onClick={ sayReact }>Tweet me</button>
		</div>
	);
}


export default Twitter;