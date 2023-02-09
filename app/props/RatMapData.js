import BilingualText from './BilingualText';
import ProjectData from './ProjectData';
import Link from './Link';

const RatMapData =
	new ProjectData(
		new BilingualText("RatMap", "鼠图"),
		new BilingualText("Experience the real New York City", "体验地道的纽约"),
		[
			new BilingualText("Visualization for NYC Open Data's rat infestation inspections", "他妈太多老鼠, 卧槽看看有多少"),
			new BilingualText("Users can filter by borough or location and calculate likelihood of infestation", "用户可以通过地区或地址计算老鼠侵扰的盖然性"),
			new BilingualText("Built using React, Redux, Socrata Web API, and Google Maps API", "使用的工具包括React, Redux, Socrata联网API, 与谷歌地图API")

		],
		[
			new Link(false, "https://github.com/dillonius01/ratmap", "zmdi zmdi-github zmdi-hc-2x"),
			new Link(false, "https://www.youtube.com/watch?v=eCVuL15I0G4", "zmdi zmdi-youtube-play zmdi-hc-2x"),
		]);

export default RatMapData;