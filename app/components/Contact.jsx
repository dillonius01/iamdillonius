import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const Contact = ({ language }) => (
	<div className="clearfix card-container">
		<div className="col-12 contact-col">
			<h2 className="txt-center txt-intro name">
				{ (language === 'English') ?
					"FIN" :
					"完了，还想看么？"
				}
			</h2>
			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"Still want more? Check out these links!" :
					"下面链接有更多的精彩"
				}
			</h2>

			<div className="col-4 link-container inline-block">
				<a target="_blank" href="https://github.com/dillonius01" className="center">
					<i className="zmdi zmdi-github zmdi-hc-2x"></i>
				</a>
			</div>

			<div className="col-4 link-container inline-block">
				<a target="_blank" href="https://www.linkedin.com/in/dillonpowers" className="center">
					<i className="zmdi zmdi-linkedin zmdi-hc-2x"></i>
				</a>
			</div>

			<div className="col-4 link-container inline-block">
				<a target="_blank" href="mailto:dillon.c.powers@gmail.com?Subject=Wow%20cool%20website" className="center">
					<i className="zmdi zmdi-email zmdi-hc-2x"></i>
				</a>
			</div>

		</div>

		<div className="col-12 contact-col">
		
			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"Or you can dowload my resume" :
					"或许下载我经历吧"
				}
			</h2>

			<div className="col-12 link-container inline-block">
				<a target="_blank" href="/public/media/Powers_Dillon_resume.pdf" className="center" download>
					<i className="zmdi zmdi-download zmdi-hc-2x"></i>
				</a>
			</div>
		</div>
	</div>

);


export default Contact;
