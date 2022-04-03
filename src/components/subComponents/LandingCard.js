import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, Container } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"

let articles = [
	{
		source: { id: null, name: "News18" },
		author: "News Desk",
		title: "Sri Lanka Economic Crisis LIVE Updates: Armed Troops Block Oppn Protest March; Social Media Blackout in Isl - News18",
		description:
			"Sri Lanka Economic Crisis LIVE Updates: A consignment of 40,000 metric tonnes of diesel from India reached Sri Lanka on Saturday, the fourth such assistance from New Delhi.",
		url: "https://www.news18.com/news/world/sri-lanka-economic-crisis-live-updates-financial-emergency-curfew-gotabaya-rajapaksa-colombo-livenews-4936700.html",
		urlToImage:
			"https://images.news18.com/ibnlive/uploads/2022/04/1600-x-1600-64-164896790316x9.jpg",
		publishedAt: "2022-04-03T06:37:33Z",
		content:
			"Sri Lanka’s government imposed a weekend curfew on Saturday, even as hundreds of lawyers urged President Gotabaya Rajapaksa to revoke the state of emergency introduced following unrest over fuel and … [+3166 chars]",
	},
	{
		source: { id: null, name: "The Indian Express" },
		author: "Express Web Desk",
		title: "Imran Khan No-Trust Vote Live Updates: Section 144 in Islamabad amid rumours of possible violence; Parliament to vote today - The Indian Express",
		description:
			"Pakistan News LIVE Updates, Imran Khan No-Trust Vote Live News: The PM has blamed the United States for backing the move to oust him, saying it was interfering in domestic politics.",
		url: "https://indianexpress.com/article/pakistan/pakistan-pm-imran-khan-no-confidence-motion-parliament-vote-live-updates-7850131/",
		urlToImage:
			"https://images.indianexpress.com/2022/04/53d61e71c3204e11b494ac800e56226d-53d61e71c3204e11b494ac800e56226d-fda453d38428457ca28540fc6056f913.jpg",
		publishedAt: "2022-04-03T06:24:47Z",
		content:
			"Supporters of the Pakistan Tehreek-e-Insaf (PTI) political party, carry signs as they chant slogans accusing the U.S. of plotting to overthrow Pakistani Prime Minister Imran Khan, during a protest in… [+1876 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "HT Entertainment Desk",
		title: "Namita Thapar reveals she has invested in a brand that Ashneer Grover nabbed on Shark Tank: 'I got in touch with them' - Hindustan Times",
		description:
			"Shark Tank India: Namita Thapar spoke about the deal she lost to Ashneer Grover on the show. She also called it her regret.",
		url: "https://www.hindustantimes.com/entertainment/tv/namita-thapar-reveals-she-has-invested-in-a-brand-that-ashneer-grover-nabbed-on-shark-tank-i-got-in-touch-with-them-101648963361603.html",
		urlToImage:
			"https://images.hindustantimes.com/img/2022/04/03/1600x900/ashneer_shark_tank_1643385237138_1648963919534.jpg",
		publishedAt: "2022-04-03T05:57:08Z",
		content:
			"Namita Thapar, executive director of Emcure Pharmaceuticals, and one of the sharks on Shark Tank India, has spoken about a deal she missed while on the show. In a recent interview, Namita said that s… [+2456 chars]",
	},
	{
		source: { id: null, name: "SamMobile" },
		author: "SamMobile",
		title: "Galaxy M33 5G comes to India at an affordable price - SamMobile",
		description:
			"A few days after launching the Galaxy A13, Galaxy A23, Galaxy A53, and the Galaxy A73 in India, Samsung has ...",
		url: "https://www.sammobile.com/news/galaxy-m33-5g-launched-india-price/",
		urlToImage:
			"https://www.sammobile.com/wp-content/uploads/2022/04/Samsung-Galaxy-M33-5G-Colors-720x405.jpg",
		publishedAt: "2022-04-03T05:51:00Z",
		content:
			"A few days after launching the Galaxy A13, Galaxy A23, Galaxy A53, and the Galaxy A73 in India, Samsung has launched the Galaxy M33 5G in the country. The smartphone will be available through Amazon.… [+1486 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "HT Tech",
		title: "Solve this big headache with these WhatsApp tips and tricks on iPhone and Android - HT Tech",
		description:
			"Users can mute WhatsApp group notifications by following a few simple steps. Check these WhatsApp tips and tricks here.",
		url: "https://tech.hindustantimes.com/how-to/solve-this-big-headache-with-these-whatsapp-tips-and-tricks-on-iphone-and-android-71648962784920.html",
		urlToImage:
			"https://images.hindustantimes.com/tech/img/2022/04/03/1600x900/whatsapp-2453592_960_720_1648962944433_1648962961135.jpg",
		publishedAt: "2022-04-03T05:27:00Z",
		content:
			"Almost all the applications you install on your phone ask for the permission to send notifications. WhatsApp is one such application. Notification is something which alerts you about the happenings i… [+2246 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title: "WHO Suspends UN Supply Of Covaxin; No Impact On Efficacy, Says Bharat Biotech - NDTV",
		description:
			"The World Health Organisation said on Saturday it has suspended supply through United Nations agencies of COVID-19 vaccine Covaxin, produced by India's Bharat Biotech, to allow the manufacturer to upgrade facilities.",
		url: "https://www.ndtv.com/india-news/who-suspends-un-supply-of-covaxin-no-impact-on-efficacy-says-bharat-biotech-2859571",
		urlToImage:
			"https://c.ndtvimg.com/2021-10/nfkjg30o_bharat-biotech-covaxinreuters_625x300_26_October_21.jpg",
		publishedAt: "2022-04-03T05:19:00Z",
		content:
			"Covaxin vaccine: Bharat Biotech said it is slowing down production of Covaxin for facility optimisation.\r\nNew Delhi: The World Health Organisation said on Saturday it has suspended supply through Uni… [+1808 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "HT Entertainment Desk",
		title: "Twinkle jokes about making a movie called ‘Nail File’ after The Kashmir Files - Hindustan Times",
		description:
			"Twinkle Khanna has written about the craze for The Kashmir Files in her latest column. | Bollywood",
		url: "https://www.hindustantimes.com/entertainment/bollywood/twinkle-khanna-jokes-about-making-nail-file-movie-better-than-putting-the-final-nail-into-the-communal-coffin-101648961210294.html",
		urlToImage:
			"https://images.hindustantimes.com/img/2022/04/03/1600x900/Twinkle_Khanna_1630225114098_1648961386759.jpg",
		publishedAt: "2022-04-03T05:10:21Z",
		content:
			"Former actor, now author Twinkle Khanna has published her latest column and this one addresses the two biggest newsmakers in the world of entertainment--the success of Kashmir Files and the Oscars 's… [+2124 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title: "New Covid Variant XE Found In UK, More Transmissible Than Omicron: WHO - NDTV",
		description:
			"A new Covid variant has been found in the UK, the World Health Organisation said in its latest report. The new mutant, called XE, may be more transmissible than any strain of COVID-19, the health body said.",
		url: "https://www.ndtv.com/world-news/new-covid-variant-xe-found-in-uk-more-transmissible-than-omicron-who-2858643",
		urlToImage:
			"https://c.ndtvimg.com/2022-01/aspe9aes_covid-in-britain-afp_625x300_10_January_22.jpg",
		publishedAt: "2022-04-03T04:34:00Z",
		content:
			"637 cases of the new variant have been reported yet in UK\r\nNew Delhi: A new Covid variant has been found in the UK, the World Health Organisation said in its latest report. The new mutant, called XE,… [+1362 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "hindustantimes.com",
		title: "AUS vs ENG, Women’s WC Final Live Score: Alyssa Healy's 170 helps AUS pile 356/5 - Hindustan Times",
		description:
			"Australia vs England, Women’s World Cup 2022 Final Live Cricket Score: Alyssa Healy was the standout batter from the Australian camp as she scored 170 off 138 balls before getting out to Anya Shrubsole.",
		url: "https://www.hindustantimes.com/cricket/australia-vs-england-live-score-icc-womens-cricket-world-cup-2022-final-aus-w-vs-eng-w-latest-score-and-match-updates-101648923534852.html",
		urlToImage:
			"https://images.hindustantimes.com/img/2022/04/03/1600x900/AUS__1648950414958_1648950430619.jpg",
		publishedAt: "2022-04-03T04:33:54Z",
		content:
			"Australia Women: Rachael Haynes, Alyssa Healy(w), Meg Lanning(c), Beth Mooney, Tahlia McGrath, Ashleigh Gardner, Annabel Sutherland, Jess Jonassen, Alana King, Megan Schutt, Darcie Brown, Ellyse Perr… [+303 chars]",
	},
	{
		source: { id: null, name: "Abplive.com" },
		author: "ABP News Bureau",
		title: "Coronavirus Update: 81 COVID Deaths Reported In India. Check Fresh Infections, Recovery Rate - ABP Live",
		description:
			"The country's daily COVID positivity rate was reported to be at 0.24 per cent and the weekly positivity rate at 0.23 per cent.",
		url: "https://news.abplive.com/health/coronavirus-update-81-covid-deaths-reported-in-india-check-fresh-infections-recovery-rate-1523274",
		urlToImage:
			"https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/03/0f709131cbaf2289e9c8ed1f93a1d084_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
		publishedAt: "2022-04-03T03:41:49Z",
		content: null,
	},
	{
		source: { id: null, name: "India.com" },
		author: "Bureau",
		title: "OnePlus 9, OnePlus 9 Pro to get massive price cut in India: Know how to avail it - Zee News",
		description:
			"Following the debut of the OnePlus 10 Pro in India last week, the OnePlus 9 and OnePlus 9 Pro smartphones are getting yet another price cut.",
		url: "https://zeenews.india.com/technology/oneplus-9-oneplus-9-pro-to-get-massive-price-cut-in-india-know-how-to-avail-it-2450259.html",
		urlToImage:
			"https://english.cdn.zeenews.com/sites/default/files/2022/04/03/1027916-oneplus-9-pro-price.jpg",
		publishedAt: "2022-04-03T03:35:28Z",
		content:
			"New Delhi: Following the debut of the OnePlus 10 Pro in India last week, the OnePlus 9 and OnePlus 9 Pro smartphones are getting yet another price cut. Though the OnePlus 10 Pro offers some notable i… [+1871 chars]",
	},
	{
		source: { id: null, name: "News18" },
		author: "Tech Desk",
		title: "Garena Free Fire Max Redeem Codes for April 3: Here Are The Redemption Codes To Win The Free Rewards - News18",
		description:
			"Garena Free Fire Max Redeem Codes for April 3 are here, and the Free Fire Max smartphone game players can use these redeem codes to get free rewards right away. Here's how it works",
		url: "https://www.news18.com/news/tech/garena-free-fire-max-redeem-codes-for-april-3-here-are-the-redemption-codes-to-win-the-free-rewards-4936790.html",
		urlToImage:
			"https://images.news18.com/ibnlive/uploads/2022/03/free-fire-max-164749328316x9.jpg",
		publishedAt: "2022-04-03T03:29:37Z",
		content:
			"Garena Free Fire Max redeem codes are awaited with excitement every day and the latest redemption codes for Garena Free Fire Max that get you free rewards have been rolled out. Garena lets players bu… [+1915 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "hindustantimes.com",
		title: "Will play Hanuman Chalisa in front of mosques if...: Raj Thackeray's warning - Hindustan Times",
		description:
			"‘Were there loudspeakers when the religion was founded?’ MNS chief Raj Thackeray said in his Gudi Padwa address adding that he is not against prayers or any particular religion.  | Latest News India",
		url: "https://www.hindustantimes.com/india-news/will-play-hanuman-chalisa-in-front-of-mosques-if-mns-chief-raj-thackeray-s-warning-101648951411765.html",
		urlToImage:
			"https://images.hindustantimes.com/img/2022/04/03/1600x900/ANI-20220402368-0_1648951495524_1648951532589.jpg",
		publishedAt: "2022-04-03T02:08:12Z",
		content:
			"Maharashtra Navnirman Sena chief Raj Thackeray on Saturday said he is not against any religion but his party workers will play Hanuman Chalisa in front of mosques if the state government does not rem… [+1204 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title: "China Reports Over 13,000 New Covid Cases As Outbreak Spreads - NDTV",
		description:
			"China Sunday reported 13,146 Covid cases, the highest since the peak of the first wave more than two years ago, as the highly transmissible Omicron variant spread to more than a dozen provinces.",
		url: "https://www.ndtv.com/world-news/china-reports-over-13-000-new-covid-19-cases-as-outbreak-spreads-2859481",
		urlToImage:
			"https://c.ndtvimg.com/2022-04/uvrjp6c4_shanghai-china-covid-reuters_625x300_02_April_22.jpg",
		publishedAt: "2022-04-03T02:08:00Z",
		content:
			"China reported 13,146 Covid cases as Omicron variant spread to more than a dozen provinces. (File)\r\nBeijing: China reported 13,000 Covid cases on Sunday, the most since the peak of the first pandemic… [+2798 chars]",
	},
	{
		source: { id: null, name: "India Today" },
		author: null,
		title: "Curfew clamped, internet shut down in Rajasthan’s Karauli after communal clashes | What happened so far - India Today",
		description:
			"Curfew was clamped and internet services suspended in Rajasthan’s Karauli after violence broke out following stone-pelting at a religious procession taken out on Saturday.",
		url: "https://www.indiatoday.in/india/story/rajasthan-karauli-attack-curfew-clamped-internet-shut-down-communal-clashes-1932847-2022-04-03",
		urlToImage:
			"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/PTI03_09_2022_000143B-647x363.jpeg?CiVas3FF2e.meQxjZXts0s1V.9vu4TJO",
		publishedAt: "2022-04-03T01:47:20Z",
		content: null,
	},
	{
		source: { id: null, name: "Bollywood Life" },
		author: "Russel D'Silva",
		title: "Attack box office collection day 2 early estimate: John Abraham starrer fails to show any growth; RRR massive - Bollywood Life",
		description:
			"It's telling that RRR may have collected almost 600% more on its second Saturday that what John Abraham's Attack has on its first Saturday",
		url: "https://www.bollywoodlife.com/box-office/attack-box-office-collection-day-2-early-estimate-john-abraham-starrer-fails-to-show-any-growth-rrr-massively-outperforms-it-on-day-9-bollywood-and-entertainment-news-2040814/",
		urlToImage:
			"https://st1.bollywoodlife.com/wp-content/uploads/2022/04/Attack_Box_Office_Collection_Day2_VS_RRR_Box_Office_Collection_Day9-600x315.jpg",
		publishedAt: "2022-04-03T01:46:27Z",
		content:
			"John Abraham starrer Attack hasn't taken a promising start at the box office in the Indian market, collecting a mere 3.5 nett on day 1, which is less than half of what the makers would've hoped for. … [+3536 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title: "Petrol, Diesel Prices Hiked Again, Delhi Rates Up By Rs 8 In 13 days - NDTV",
		description:
			"Petrol and diesel prices were on Sunday again hiked by 80 paise a litre each, taking the total increase in rates in less then two weeks to Rs 8 per litre.",
		url: "https://www.ndtv.com/india-news/petrol-and-diesel-prices-hiked-again-delhi-rates-up-by-rs-8-in-13-days-2859480",
		urlToImage:
			"https://c.ndtvimg.com/2021-09/ojarjui8_petrol-pump_650x400_28_September_21.jpg",
		publishedAt: "2022-04-03T01:44:00Z",
		content:
			"Rates have been increased across the country and vary from state to state depending on local taxation.\r\nNew Delhi: Petrol and diesel prices were on Sunday again hiked by 80 paise a litre each, taking… [+580 chars]",
	},
	{
		source: { id: null, name: "The Indian Express" },
		author: "Manoj C G",
		title: "Opp parties come together as Stalin inaugurates party office in capital - The Indian Express",
		description:
			"Congress president Sonia Gandhi, Samajwadi Party leader Akhilesh Yadav, Left leaders Sitaram Yechury and D Raja, National Conference leader Farooq Abdullah and representatives of the Trinamool Congress and TDP joined Tamil Nadu Chief Minister M K Stalin as he…",
		url: "https://indianexpress.com/article/india/opp-parties-come-together-as-stalin-inaugurates-party-office-in-capital-7849965/",
		urlToImage: "https://images.indianexpress.com/2022/04/p1-DMK-4col.jpg",
		publishedAt: "2022-04-03T01:07:08Z",
		content:
			"THE INAUGURATION of the DMKs office in Delhi on Saturday brought together several non-BJP leaders at a time when there is churning in the Opposition, with non-Congress parties exhorting everyone to u… [+3880 chars]",
	},
	{
		source: { id: null, name: "The Indian Express" },
		author: "Reuters",
		title: "India starts supplying rice to Sri Lanka in first major food aid - The Indian Express",
		description:
			"The Indian Ocean island nation of 22 million people is struggling to pay for essential imports after a 70% drop in foreign exchange reserves in two years led to a currency devaluation and efforts to seek help from global lenders.",
		url: "https://indianexpress.com/article/world/india-starts-supplying-rice-to-sri-lanka-in-first-major-food-aid-7849294/",
		urlToImage: "https://images.indianexpress.com/2022/04/srilanka-11.jpg",
		publishedAt: "2022-04-03T01:04:31Z",
		content:
			"Indian traders have started loading 40,000 tonnes of rice for prompt shipment to Sri Lanka in the first major food aid since Colombo secured a credit line from New Delhi, two officials told Reuters o… [+541 chars]",
	},
]

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

export default function LandingCard() {
	const navigate = useNavigate()
	let n = Math.floor(Math.random() * 19 + 1)
	const [news, setNews] = React.useState(articles[n])
	const nextHandler = () => {
		n = Math.floor(Math.random() * 7 + 1)
		setNews(articles[n])
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<Box sx={{ maxWidth: 600, pt: "7rem", margin: "auto" }}>
				<Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
					<Container>
						<CardContent sx={{ minHeight: "15rem" }}>
							<Typography sx={{ textAlign: "center", mb: "0.5rem" }}>
								News Highlight
							</Typography>
							<Typography
								sx={{ fontSize: 22, padding: "0.5rem" }}
								color="text.white"
								gutterBottom
							>
								{news.title} "
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{news.description}
							</Typography>
							<Container>
								<Button
									sx={{
										float: "right",
										margin: "1rem 0rem",
										padding: "1rem",
									}}
									size="small"
									variant="text"
									onClick={nextHandler}
								>
									Next
								</Button>
							</Container>
						</CardContent>
					</Container>
				</Card>
				<Container sx={{ textAlign: "center" }}>
					<Button
						color="warning"
						sx={{
							margin: "1rem",
							marginLeft: "0.4rem",
							marginTop: "2rem",
						}}
						size="small"
						variant="contained"
						onClick={()=>{
							navigate('/register')
						}}
					>
						Be a member to access our website
					</Button>
				</Container>
			</Box>
		</ThemeProvider>
	)
}
