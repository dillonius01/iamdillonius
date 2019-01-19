import BilingualText from './BilingualText';
import ProjectData from './ProjectData';
import Link from './Link';

const NewsMirrorData =
	new ProjectData(
		new BilingualText("News Mirror", "镜子新闻"),
		new BilingualText("Updates from the other side", "双面之信息"),
		[
			new BilingualText(
				"Chrome extension that generates suggestions for related news articles from different political opinions",
				"寻找有不同政治观念的新闻"),
			new BilingualText(
				"Generates suggestions based on the current page content and analysis of the site's political leanings", 
				"分析网址之后，应用通过智能科技推荐类似的新闻"),
			new BilingualText(
				"Built using nothing but sweet, sweet JavaScript", 
				"简单就是魅力：此项目只用了一点纯净的JavaScript我就开心了")
		],
		[
			new Link(false, "https://github.com/harryttd/news-mirror", "zmdi zmdi-github zmdi-hc-2x"),
		]);

export default NewsMirrorData;