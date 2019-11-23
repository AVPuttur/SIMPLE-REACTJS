import React from 'react';
//OR USE props.messsage, pass (props) in function first
function MauritiusFlag ({colour, message}) {
	return (
		<div className={colour}>
		<h1>{colour}</h1>
		<p>{message}</p> 
		</div>
	);
}

export default MauritiusFlag;