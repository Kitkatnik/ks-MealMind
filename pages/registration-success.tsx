import * as React from "react";
import { useTranslate } from "@pankod/refine-core";
import {
	Box,
	Typography,
	Container,
	Card,
	CardContent,
} from "@pankod/refine-mui";
import {
	layoutStyles,
	titleStyles,
} from "../src/components/pages/auth/components/styles";

const RegisterSuccess = () => {
	const translate = useTranslate();

	// REVIEW: Remove translate & add gmail link

	const Content = (
		<Card>
			<CardContent sx={{ paddingX: "32px" }}>
				<Typography
					component="h1"
					variant="h5"
					align="center"
					style={titleStyles}
					color="primary"
				>
					{translate("pages.registersuccess.title", "Success!")}
				</Typography>
				<Typography
					component="p"
					align="center"
					style={titleStyles}
				>
					{translate("pages.registersuccess.body", "Please check your email to confirm your account.")}
				</Typography>
			</CardContent>
		</Card>
	);

	return (
		<Box component="div" style={layoutStyles}>
			<Container
				component="main"
				maxWidth="xs"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				{Content}
			</Container>
		</Box>
	);
};

export default RegisterSuccess;
