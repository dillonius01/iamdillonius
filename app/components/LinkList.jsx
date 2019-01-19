import React, { Component } from 'react';
import Link from './Link';
	

const LinkList = ({ links }) => {
	const colSize = 12 / links.length;
	
	const linkComponents = links.map(l => <div>hello world!</div>)

	return
		<div className="col-12 center-vert">
		{ 
			linkComponents
		}
		</div>
}


// {
// 		 	links.map(l => <Link colSize={colSize} linkData={l} />)
// 		}
export default LinkList;