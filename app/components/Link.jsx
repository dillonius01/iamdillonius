const Link = ({ colSize, linkData }) => (
	<div className={`col-${colSize} link-container`}>
		hello world!
	</div>
)

export default Link;

// {
	// 	linkData.isImage ?
	// 	<a target="_blank" href={linkData.target}>
	// 		<img id="img-ratmap" src={linkData.source}></img>
	// 	</a>
	// 	:
	// 	<a target="_blank" href={linkData.target}>
	// 		<i className={linkData.source}></i>
	// 	</a>
	// }