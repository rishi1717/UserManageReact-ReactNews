import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
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
					<Typography>{children}</Typography>
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
					aria-label="basic tabs example"
				>
					<Tab label="World" {...a11yProps(0)} />
					<Tab label="India" {...a11yProps(1)} />
					<Tab label="Sports" {...a11yProps(2)} />
					<Tab label="Entertainment" {...a11yProps(3)} />
					<Tab label="Health" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<NewsTopics topic="World" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<NewsTopics topic="India" />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<NewsTopics topic="Sports" />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<NewsTopics topic="Entertainment" />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<NewsTopics topic="Health" />
			</TabPanel>
		</Box>
	)
}

// <NewsTopics topic="World" />
// <NewsTopics topic="India" />
// <NewsTopics topic="Sports" />
// <NewsTopics topic="Entertainment" />
// <NewsTopics topic="Health" />