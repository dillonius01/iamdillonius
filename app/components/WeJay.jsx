import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const WeJay = ({ language }) => (

	<div className="card-container clearfix">
		<div className="col-12 card-title">
			<h3 className="subtitle">{(language === 'English') ? "weJay" : "微贼"}</h3>
			<h5 className="subtitle">{ (language === 'English') ? "Everyone's a DJ" : "连你也可以当DJ"}</h5>
		</div>

		<div className="col-12">
			{ (language === 'English') ?
				<ul className="project-bullets">
					<li>
						Collaborative DJ web app that lets party-goers democratically choose what songs plays next
					</li>
					<li>
						Users suggest songs from Soundcloud, upvote songs they like, and earn DJ points for popular choices
					</li>
					<li>
						Built using React, Redux, and Firebase
					</li>
				</ul>
				:
				<ul className="project-bullets">
					<li>
						与朋友们携手创造播放列表
					</li>
					<li>
						用户通过Soundcloud寻找并点赞喜欢的歌曲，因此可以积累DJ分
					</li>
					<li>
						使用的工具包括React, Redux, 与谷歌Firebase
					</li>
				</ul>
				}
		</div>

		<div className="col-12 center-vert">
			<div className="col-4 link-container">
				<a target="_blank" href="https://github.com/christophermanahan/wejay">
					<i className="zmdi zmdi-github zmdi-hc-2x"></i>
				</a>
			</div>
			<div className="col-4 link-container">
				<a target="_blank" href="http://wejay.me">
					<img className="img-title" src="public/logos/wejay.png"></img>
				</a>
			</div>
			<div className="col-4 link-container">
				<a target="_blank" href="https://www.youtube.com/watch?v=-XEOkNGz8m0">
					<i className="zmdi zmdi-youtube-play zmdi-hc-2x"></i>
				</a>
			</div>
		</div>
	</div>
);

export default WeJay;
