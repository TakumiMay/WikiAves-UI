import React from "react";
import { Typography } from '@material-ui/core';
import Link from "@material-ui/core/Link";


// TODO fix style
function Footer() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/TakumiMay/WikiAves-UI">
				Github Repository
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Footer;
