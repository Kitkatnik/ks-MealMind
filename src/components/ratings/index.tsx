import {
	Rating,
	IconContainerProps,
	styled,
} from "@pankod/refine-mui";
import {
	SentimentVeryDissatisfied,
	SentimentDissatisfied,
	SentimentSatisfied,
	SentimentSatisfiedAlt,
	SentimentVerySatisfied,
} from "@mui/icons-material";

export const StyledRating = styled(Rating)(({ theme }) => ({
	"& .MuiRating-iconEmpty .MuiSvgIcon-root": {
		color: theme.palette.action.disabled,
	},
}));

export const customIcons: {
	[index: string]: {
		icon: React.ReactElement;
		label: string;
	};
} = {
	1: {
		icon: <SentimentVeryDissatisfied color="error" />,
		label: "Very Dissatisfied",
	},
	2: {
		icon: <SentimentDissatisfied color="error" />,
		label: "Dissatisfied",
	},
	3: {
		icon: <SentimentSatisfied color="warning" />,
		label: "Neutral",
	},
	4: {
		icon: <SentimentSatisfiedAlt color="success" />,
		label: "Satisfied",
	},
	5: {
		icon: <SentimentVerySatisfied color="success" />,
		label: "Very Satisfied",
	},
};

export function IconContainer(props: IconContainerProps) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}