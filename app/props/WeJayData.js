import BilingualText from './BilingualText';
import ProjectData from './ProjectData';
import Link from './Link';

const WeJayData =
	new ProjectData(
		new BilingualText("weJay", "微贼"),
		new BilingualText("Everyone's a DJ", "连你也可以当DJ"),
		[
			new BilingualText("Collaborative DJ web app that lets party-goers democratically choose what songs plays next", "与朋友们携手创造播放列表"),
			new BilingualText("Users suggest songs from Soundcloud, upvote songs they like, and earn DJ points for popular choices", "用户通过Soundcloud寻找并点赞喜欢的歌曲，因此可以积累DJ分"),
			new BilingualText("Built using React, Redux, and Firebase", "使用的工具包括React, Redux, 与谷歌Firebase")

		],
		[
			new Link(false, "https://github.com/christophermanahan/wejay", "zmdi zmdi-github zmdi-hc-2x"),
			new Link(true, "http://wejay.me", "public/logos/wejay.png", "img-wejay"),
			new Link(false, "https://www.youtube.com/watch?v=-XEOkNGz8m0", "zmdi zmdi-youtube-play zmdi-hc-2x"),
		]);

export default WeJayData;