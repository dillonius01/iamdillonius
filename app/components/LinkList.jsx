import React, { Component } from 'react';
import Link from './Link';
	

const LinkList = ({ links }) => {
	const colSize = 12 / links.length;

	return (
		<div className="col-12 center-vert">
		{
			links.map((l, idx) => (<Link colSize={colSize} key={idx} linkData={l} />))
		}
		</div>
)}


export default LinkList;