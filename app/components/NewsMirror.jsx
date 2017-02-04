import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const NewsMirror = ({ language }) => (

	<div className="card-container clearfix">
		<div className="md-col md-col-12 card-title">
			<h3 className="subtitle">News Mirror</h3>
			<h5 className="subtitle">{ (language === 'English') ? "Updates from the other side" : "双面之信息"}</h5>
		</div>

		<div className="md-col md-col-12">
			{ (language === 'English') ?
				<ul className="project-bullets">
					<li>
						Chrome extension that generates suggestions for related news articles from different political opinions
					</li>
					<li>
						Generates suggestions based on the current page content and analysis of the site's political leanings
					</li>
					<li>
						Built using nothing but sweet, sweet JavaScript
					</li>
				</ul>
				:
				<ul className="project-bullets">
					<li>
						寻找有不同政治观念的新闻
					</li>
					<li>
						分析网址之后，应用通过智能科技推荐类似的新闻
					</li>
					<li>
						简单就是魅力：此项目只用了一点纯净的JavaScript我就开心了
					</li>
				</ul>
				}
		</div>

		<div className="md-col md-col-12 center-vert">
			<div className="md-col md-col-12 link-container">
				<a target="_blank" href="https://github.com/harryttd/news-mirror">
					<i className="zmdi zmdi-github zmdi-hc-2x"></i>
				</a>
			</div>

		</div>
	</div>
);

export default NewsMirror;
