import { useState } from "react";
import { useTranslate, BaseKey } from "@pankod/refine-core";
import {
	Card,
	CardHeader,
	Box,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	Popover,
	Button,
	Divider,
	TextField,
	Rating,
	IconContainerProps,
	styled,
} from "@pankod/refine-mui";
import {
	MoreVert,
	Edit,
	SentimentVeryDissatisfied,
	SentimentDissatisfied,
	SentimentSatisfied,
	SentimentSatisfiedAlt,
	SentimentVerySatisfied,
} from "@mui/icons-material";

import { StyledRating, IconContainer, customIcons,  } from '../ratings'

import { IFoods } from "../../interfaces";

type FoodItem = {
	food: IFoods;
	show: (id: BaseKey) => void;
};

export const FoodItem: React.FC<FoodItem> = ({ food, show }) => {
	const { 
		id, 
		food_name, 
		rating, 
		food_image 
	} = food;

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const popoverId = open ? "simple-popover" : undefined;

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				position: "relative",
				height: "100%",
			}}
		>
			<CardHeader
				action={
					<Box component="div">
						<IconButton
							aria-describedby={popoverId}
							onClick={handleClick}
							sx={{ marginRight: "10px", marginTop: "4px" }}
							aria-label="settings"
						>
							<MoreVert />
						</IconButton>
						<Popover
							id={popoverId}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
						>
							<Button
								onClick={() => {
									show(id);
									setAnchorEl(null);
								}}
								size="small"
								startIcon={<Edit />}
								sx={{
									padding: "5px 10px",
								}}
							>
								{"Edit"}
							</Button>
						</Popover>
					</Box>
				}
				sx={{ padding: 0 }}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<CardMedia
					component="img"
					sx={{
						width: { xs: 60, sm: 84, lg: 108, xl: 144 },
						height: { xs: 60, sm: 84, lg: 108, xl: 144 },
						borderRadius: "50%",
					}}
					alt={food_name}
					image={food_image}
				/>
			</Box>
			<CardContent
				sx={{
					paddingX: "36px",
					display: "flex",
					flexDirection: "column",
					flex: 1,
				}}
			>
				<Divider />
				<Typography
					sx={{
						fontWeight: 800,
						fontSize: "18px",
						overflow: "hidden",
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
					}}
					// align="center"
				>
					{food_name}
				</Typography>
				<StyledRating
					name="highlight-selected-only"
					defaultValue={rating}
					IconContainerComponent={IconContainer}
					// getLabelText={(value: number) => customIcons[value].label}
					highlightSelectedOnly
					readOnly
				/>
			</CardContent>
		</Card>
	);
};
