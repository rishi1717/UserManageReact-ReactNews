import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import NewsTopics from "./NewsTopics"

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Box>{children}</Box>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
				>
					<Tab label="World" {...a11yProps(0)} />
					<Tab label="India" {...a11yProps(1)} />
					<Tab label="Business" {...a11yProps(2)} />
					<Tab label="Sports" {...a11yProps(3)} />
					<Tab label="Entertainment" {...a11yProps(4)} />
					<Tab label="Health" {...a11yProps(5)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<NewsTopics
					head="World"
					topic="everything?q=world&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<NewsTopics
					head="India"
					topic="everything?q=india&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<NewsTopics
					head="Business"
					topic="top-headlines?country=in&category=business&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<NewsTopics
					head="Sports"
					topic="top-headlines?country=in&category=sports&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<NewsTopics
					head="Entertainment"
					topic="top-headlines?country=in&category=entertainment&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
			<TabPanel value={value} index={5}>
				<NewsTopics
					head="Health"
					topic="top-headlines?category=health&apiKey=5d9cae80086b47fda1a1bffac2de64ce"
				/>
			</TabPanel>
		</Box>
	)
}