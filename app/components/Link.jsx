import React, { Component } from 'react';

const Link = ({ colSize, linkData }) => (
	<div className={`col-${colSize} link-container`}>
	{
		linkData.isImage ?
		<a target="_blank" href={linkData.target}>
			<img id={linkData.id} src={linkData.source}></img>
		</a>
		:
		<a target="_blank" href={linkData.target}>
			<i className={linkData.source}></i>
		</a>
	}
	</div>
)

export default Link;

