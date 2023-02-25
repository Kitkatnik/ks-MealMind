import React from "react";
import { LayoutWrapper } from "@pankod/refine-core";
import {
	Container,
	Divider,
	Box,
	Grid,
	Autocomplete,
	TextField,
	Button,
	ButtonGroup,
	Checkbox,
	FormGroup,
	FormControlLabel,
	FormControl,
	RadioGroup,
	Radio,
	Typography,
	Rating,
	Stack,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Chip,
	List,
	ListItem,
	GridValueGetterParams,
	ListItemText,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	DataGrid,
	GridColDef,
	Alert,
	// AlertProps,
	Snackbar,
	// AppBar,
	// Toolbar,
	IconButton,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	useTheme,
	Breadcrumbs,
	Link,
	Pagination,
	PaginationItem,
	Stepper,
	Step,
	StepLabel,
	// styled,
	// StepConnector,
	// StepIconProps,
	Popper,
	FormLabel,
	// stepConnectorClasses,
	Grow,
	ClickAwayListener,
	MenuList,
} from "@pankod/refine-mui";

// import {
// 	LocalizationProvider,
// 	DatePicker,
// 	StaticDatePicker,
// } from "@mui/x-date-pickers";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import Dayjs from "dayjs";

import {
	SkipNext,
	SkipPrevious,
	PlayArrow,
	NavigateNext,
	Home,
	Whatshot,
	Grain,
	ArrowBack,
	ArrowForward,
	ArrowDropDown,
	// Settings,
	// GroupAdd,
	// VideoLabel,
	// Check,
} from "@mui/icons-material";

export function Types() {
	return (
		<Box sx={{ width: "100%", maxWidth: 500 }}>
			<Typography variant="h1" gutterBottom>
				h1. Heading
			</Typography>
			<Typography variant="h2" gutterBottom>
				h2. Heading
			</Typography>
			<Typography variant="h3" gutterBottom>
				h3. Heading
			</Typography>
			<Typography variant="h4" gutterBottom>
				h4. Heading
			</Typography>
			<Typography variant="h5" gutterBottom>
				h5. Heading
			</Typography>
			<Typography variant="h6" gutterBottom>
				h6. Heading
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quos blanditiis tenetur
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quos blanditiis tenetur
			</Typography>
			<Typography variant="body1" gutterBottom>
				body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography variant="body2" gutterBottom>
				body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography variant="button" display="block" gutterBottom>
				button text
			</Typography>
			<Typography variant="caption" display="block" gutterBottom>
				caption text
			</Typography>
			<Typography variant="overline" display="block" gutterBottom>
				overline text
			</Typography>
		</Box>
	);
}

export function ComboBox() {
	return (
		<Autocomplete
			disablePortal
			id="combo-box-demo"
			options={top100Films}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Movie" />}
		/>
	);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
	{ label: "The Shawshank Redemption", year: 1994 },
	{ label: "The Godfather", year: 1972 },
	{ label: "The Godfather: Part II", year: 1974 },
	{ label: "The Dark Knight", year: 2008 },
	{ label: "12 Angry Men", year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: "Pulp Fiction", year: 1994 },
	{
		label: "The Lord of the Rings: The Return of the King",
		year: 2003,
	},
	{ label: "The Good, the Bad and the Ugly", year: 1966 },
	{ label: "Fight Club", year: 1999 },
	{
		label: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
	},
	{
		label: "Star Wars: Episode V - The Empire Strikes Back",
		year: 1980,
	},
	{ label: "Forrest Gump", year: 1994 },
	{ label: "Inception", year: 2010 },
	{
		label: "The Lord of the Rings: The Two Towers",
		year: 2002,
	},
	{ label: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ label: "Goodfellas", year: 1990 },
	{ label: "The Matrix", year: 1999 },
	{ label: "Seven Samurai", year: 1954 },
	{
		label: "Star Wars: Episode IV - A New Hope",
		year: 1977,
	},
	{ label: "City of God", year: 2002 },
	{ label: "Se7en", year: 1995 },
	{ label: "The Silence of the Lambs", year: 1991 },
	{ label: "It's a Wonderful Life", year: 1946 },
	{ label: "Life Is Beautiful", year: 1997 },
	{ label: "The Usual Suspects", year: 1995 },
	{ label: "Léon: The Professional", year: 1994 },
	{ label: "Spirited Away", year: 2001 },
	{ label: "Saving Private Ryan", year: 1998 },
	{ label: "Once Upon a Time in the West", year: 1968 },
	{ label: "American History X", year: 1998 },
	{ label: "Interstellar", year: 2014 },
	{ label: "Casablanca", year: 1942 },
	{ label: "City Lights", year: 1931 },
	{ label: "Psycho", year: 1960 },
	{ label: "The Green Mile", year: 1999 },
	{ label: "The Intouchables", year: 2011 },
	{ label: "Modern Times", year: 1936 },
	{ label: "Raiders of the Lost Ark", year: 1981 },
	{ label: "Rear Window", year: 1954 },
	{ label: "The Pianist", year: 2002 },
	{ label: "The Departed", year: 2006 },
	{ label: "Terminator 2: Judgment Day", year: 1991 },
	{ label: "Back to the Future", year: 1985 },
	{ label: "Whiplash", year: 2014 },
	{ label: "Gladiator", year: 2000 },
	{ label: "Memento", year: 2000 },
	{ label: "The Prestige", year: 2006 },
	{ label: "The Lion King", year: 1994 },
	{ label: "Apocalypse Now", year: 1979 },
	{ label: "Alien", year: 1979 },
	{ label: "Sunset Boulevard", year: 1950 },
	{
		label:
			"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
		year: 1964,
	},
	{ label: "The Great Dictator", year: 1940 },
	{ label: "Cinema Paradiso", year: 1988 },
	{ label: "The Lives of Others", year: 2006 },
	{ label: "Grave of the Fireflies", year: 1988 },
	{ label: "Paths of Glory", year: 1957 },
	{ label: "Django Unchained", year: 2012 },
	{ label: "The Shining", year: 1980 },
	{ label: "WALL·E", year: 2008 },
	{ label: "American Beauty", year: 1999 },
	{ label: "The Dark Knight Rises", year: 2012 },
	{ label: "Princess Mononoke", year: 1997 },
	{ label: "Aliens", year: 1986 },
	{ label: "Oldboy", year: 2003 },
	{ label: "Once Upon a Time in America", year: 1984 },
	{ label: "Witness for the Prosecution", year: 1957 },
	{ label: "Das Boot", year: 1981 },
	{ label: "Citizen Kane", year: 1941 },
	{ label: "North by Northwest", year: 1959 },
	{ label: "Vertigo", year: 1958 },
	{
		label: "Star Wars: Episode VI - Return of the Jedi",
		year: 1983,
	},
	{ label: "Reservoir Dogs", year: 1992 },
	{ label: "Braveheart", year: 1995 },
	{ label: "M", year: 1931 },
	{ label: "Requiem for a Dream", year: 2000 },
	{ label: "Amélie", year: 2001 },
	{ label: "A Clockwork Orange", year: 1971 },
	{ label: "Like Stars on Earth", year: 2007 },
	{ label: "Taxi Driver", year: 1976 },
	{ label: "Lawrence of Arabia", year: 1962 },
	{ label: "Double Indemnity", year: 1944 },
	{
		label: "Eternal Sunshine of the Spotless Mind",
		year: 2004,
	},
	{ label: "Amadeus", year: 1984 },
	{ label: "To Kill a Mockingbird", year: 1962 },
	{ label: "Toy Story 3", year: 2010 },
	{ label: "Logan", year: 2017 },
	{ label: "Full Metal Jacket", year: 1987 },
	{ label: "Dangal", year: 2016 },
	{ label: "The Sting", year: 1973 },
	{ label: "2001: A Space Odyssey", year: 1968 },
	{ label: "Singin' in the Rain", year: 1952 },
	{ label: "Toy Story", year: 1995 },
	{ label: "Bicycle Thieves", year: 1948 },
	{ label: "The Kid", year: 1921 },
	{ label: "Inglourious Basterds", year: 2009 },
	{ label: "Snatch", year: 2000 },
	{ label: "3 Idiots", year: 2009 },
	{ label: "Monty Python and the Holy Grail", year: 1975 },
];

export function BasicButtons() {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
		</Stack>
	);
}

export function TextButtons() {
	return (
		<Stack direction="row" spacing={2}>
			<Button>Primary</Button>
			<Button disabled>Disabled</Button>
			<Button href="#text-buttons">Link</Button>
		</Stack>
	);
}

export function BasicButtonGroup() {
	return (
		<ButtonGroup variant="contained" aria-label="outlined primary button group">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	);
}

export function VariantButtonGroup() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				"& > *": {
					m: 1,
				},
			}}
		>
			<ButtonGroup variant="outlined" aria-label="outlined button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup variant="text" aria-label="text button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</Box>
	);
}

const buttons = [
	<Button key="one">One</Button>,
	<Button key="two">Two</Button>,
	<Button key="three">Three</Button>,
];

export function GroupOrientation() {
	return (
		<Box
			sx={{
				display: "flex",
				"& > *": {
					m: 1,
				},
			}}
		>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical outlined button group"
			>
				{buttons}
			</ButtonGroup>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical contained button group"
				variant="contained"
			>
				{buttons}
			</ButtonGroup>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical contained button group"
				variant="text"
			>
				{buttons}
			</ButtonGroup>
		</Box>
	);
}

const options = [
	"Create a merge commit",
	"Squash and merge",
	"Rebase and merge",
];

export function SplitButton() {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	return (
		<React.Fragment>
			<ButtonGroup
				variant="contained"
				ref={anchorRef}
				aria-label="split button"
			>
				<Button onClick={handleClick}>{options[selectedIndex]}</Button>
				<Button
					size="small"
					aria-controls={open ? "split-button-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
				>
					<ArrowDropDown />
				</Button>
			</ButtonGroup>
			<Popper
				sx={{
					zIndex: 1,
				}}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom" ? "center top" : "center bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
									{options.map((option, index) => (
										<MenuItem
											key={option}
											disabled={index === 2}
											selected={index === selectedIndex}
											onClick={(event) => handleMenuItemClick(event, index)}
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</React.Fragment>
	);
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Checkboxes() {
	return (
		<div>
			<Checkbox {...label} defaultChecked />
			<Checkbox {...label} />
			<Checkbox {...label} disabled />
			<Checkbox {...label} disabled checked />
		</div>
	);
}

export function CheckboxLabels() {
	return (
		<FormGroup>
			<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
			<FormControlLabel disabled control={<Checkbox />} label="Disabled" />
		</FormGroup>
	);
}

export function RadioButtonsGroup() {
	return (
		<FormControl>
			<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue="female"
				name="radio-buttons-group"
			>
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
				<FormControlLabel value="other" control={<Radio />} label="Other" />
			</RadioGroup>
		</FormControl>
	);
}

export function RowRadioButtonsGroup() {
	return (
		<FormControl>
			<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
				<FormControlLabel value="other" control={<Radio />} label="Other" />
				<FormControlLabel
					value="disabled"
					disabled
					control={<Radio />}
					label="other"
				/>
			</RadioGroup>
		</FormControl>
	);
}

export function BasicRating() {
	const [value, setValue] = React.useState<number | null>(2);

	return (
		<Box
			sx={{
				"& > legend": { mt: 2 },
			}}
		>
			<Typography component="legend">Controlled</Typography>
			<Rating
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
			<Typography component="legend">Read only</Typography>
			<Rating name="read-only" value={value} readOnly />
			<Typography component="legend">Disabled</Typography>
			<Rating name="disabled" value={value} disabled />
			<Typography component="legend">No rating given</Typography>
			<Rating name="no-value" value={null} />
		</Box>
	);
}

export function BasicSelect() {
	const [age, setAge] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

export function SelectVariants() {
	const [age, setAge] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="Age"
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					value={age}
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export function BasicTextFields() {
	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			<TextField id="filled-basic" label="Filled" variant="filled" />
			<TextField id="standard-basic" label="Standard" variant="standard" />
		</Box>
	);
}

export function BasicChips() {
	return (
		<Stack direction="row" spacing={1}>
			<Chip label="Chip Filled" />
			<Chip label="Chip Outlined" variant="outlined" />
		</Stack>
	);
}

export function ClickableAndDeletableChips() {
	const handleClick = () => {
		console.info("You clicked the Chip.");
	};

	const handleDelete = () => {
		console.info("You clicked the delete icon.");
	};

	return (
		<Stack direction="row" spacing={1}>
			<Chip
				label="Clickable Deletable"
				onClick={handleClick}
				onDelete={handleDelete}
			/>
			<Chip
				label="Clickable Deletable"
				variant="outlined"
				onClick={handleClick}
				onDelete={handleDelete}
			/>
		</Stack>
	);
}

export function ListDividers() {
	return (
		<List aria-label="mailbox folders">
			<ListItem button>
				<ListItemText primary="Inbox" />
			</ListItem>
			<Divider />
			<ListItem button divider>
				<ListItemText primary="Drafts" />
			</ListItem>
			<ListItem button>
				<ListItemText primary="Trash" />
			</ListItem>
			<Divider light />
			<ListItem button>
				<ListItemText primary="Spam" />
			</ListItem>
		</List>
	);
}

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const dataRows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "age",
		headerName: "Age",
		width: 90,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
];

export function DataTable() {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={dataRows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}

export function BasicAlerts() {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert severity="error">This is an error alert — check it out!</Alert>
			<Alert severity="warning">This is a warning alert — check it out!</Alert>
			<Alert severity="info">This is an info alert — check it out!</Alert>
			<Alert severity="success">This is a success alert — check it out!</Alert>
		</Stack>
	);
}

export function BasicOutlinedAlerts() {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert variant="outlined" severity="error">
				This is an error alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="warning">
				This is a warning alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="info">
				This is an info alert — check it out!
			</Alert>
			<Alert variant="outlined" severity="success">
				This is a success alert — check it out!
			</Alert>
		</Stack>
	);
}

export function BasicFilledAlerts() {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert variant="filled" severity="error">
				This is an error alert — check it out!
			</Alert>
			<Alert variant="filled" severity="warning">
				This is a warning alert — check it out!
			</Alert>
			<Alert variant="filled" severity="info">
				This is an info alert — check it out!
			</Alert>
			<Alert variant="filled" severity="success">
				This is a success alert — check it out!
			</Alert>
		</Stack>
	);
}

export function CustomizedSnackbars() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Button variant="outlined" onClick={handleClick}>
				Open success snackbar
			</Button>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
					This is a success message!
				</Alert>
			</Snackbar>
			<Alert severity="error">This is an error message!</Alert>
			<Alert severity="warning">This is a warning message!</Alert>
			<Alert severity="info">This is an information message!</Alert>
			<Alert severity="success">This is a success message!</Alert>
		</Stack>
	);
}

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export function BasicCard() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Word of the Day
				</Typography>
				<Typography variant="h5" component="div">
					be{bull}nev{bull}o{bull}lent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}

const card = (
	<React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Word of the Day
			</Typography>
			<Typography variant="h5" component="div">
				be{bull}nev{bull}o{bull}lent
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				adjective
			</Typography>
			<Typography variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Learn More</Button>
		</CardActions>
	</React.Fragment>
);

export function OutlinedCard() {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined">{card}</Card>
		</Box>
	);
}

export function MediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image="/static/images/cards/contemplative-reptile.jpg"
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lizard
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}

export function MediaControlCard() {
	const theme = useTheme();

	return (
		<Card sx={{ display: "flex" }}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Live From Space
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Mac Miller
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<IconButton aria-label="previous">
						{theme.direction === "rtl" ? <SkipNext /> : <SkipPrevious />}
					</IconButton>
					<IconButton aria-label="play/pause">
						<PlayArrow sx={{ height: 38, width: 38 }} />
					</IconButton>
					<IconButton aria-label="next">
						{theme.direction === "rtl" ? <SkipPrevious /> : <SkipNext />}
					</IconButton>
				</Box>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image="/static/images/cards/live-from-space.jpg"
				alt="Live from space album cover"
			/>
		</Card>
	);
}

export function SimplePaper() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: 128,
					height: 128,
				},
			}}
		>
			<Paper elevation={0} />
			<Paper />
			<Paper elevation={3} />
			<Paper variant="outlined" />
			<Paper variant="outlined" square />
		</Box>
	);
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export function BasicBreadcrumbs() {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/">
					MUI
				</Link>
				<Link
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					Core
				</Link>
				<Typography color="text.primary">Breadcrumbs</Typography>
			</Breadcrumbs>
		</div>
	);
}

export function CustomSeparator() {
	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/">
			MUI
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="inherit"
			href="/material-ui/getting-started/installation/"
		>
			Core
		</Link>,
		<Typography key="3" color="text.primary">
			Breadcrumb
		</Typography>,
	];

	return (
		<Stack spacing={2}>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
			<Breadcrumbs separator="-" aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
			<Breadcrumbs
				separator={<NavigateNext fontSize="small" />}
				aria-label="breadcrumb"
			>
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}

export function IconBreadcrumbs() {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/"
				>
					<Home sx={{ mr: 0.5 }} fontSize="inherit" />
					MUI
				</Link>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/material-ui/getting-started/installation/"
				>
					<Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
					Core
				</Link>
				<Typography
					sx={{ display: "flex", alignItems: "center" }}
					color="text.primary"
				>
					<Grain sx={{ mr: 0.5 }} fontSize="inherit" />
					Breadcrumb
				</Typography>
			</Breadcrumbs>
		</div>
	);
}

export function BasicPagination() {
	return (
		<Stack spacing={2}>
			<Pagination count={10} />
			<Pagination count={10} color="primary" />
			<Pagination count={10} color="secondary" />
			<Pagination count={10} disabled />
		</Stack>
	);
}

export function PaginationOutlined() {
	return (
		<Stack spacing={2}>
			<Pagination count={10} variant="outlined" />
			<Pagination count={10} variant="outlined" color="primary" />
			<Pagination count={10} variant="outlined" color="secondary" />
			<Pagination count={10} variant="outlined" disabled />
		</Stack>
	);
}

export function PaginationRounded() {
	return (
		<Stack spacing={2}>
			<Pagination count={10} shape="rounded" />
			<Pagination count={10} variant="outlined" shape="rounded" />
		</Stack>
	);
}

export function CustomIcons() {
	return (
		<Stack spacing={2}>
			<Pagination
				count={10}
				renderItem={(item) => (
					<PaginationItem
						slots={{ previous: ArrowBack, next: ArrowForward }}
						{...item}
					/>
				)}
			/>
		</Stack>
	);
}

const steps = [
	"Select campaign settings",
	"Create an ad group",
	"Create an ad",
];

export function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set<number>());

	const isStepOptional = (step: number) => {
		return step === 1;
	};

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};
					if (isStepOptional(index)) {
						labelProps.optional = (
							<Typography variant="caption">Optional</Typography>
						);
					}
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />
						{isStepOptional(activeStep) && (
							<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
								Skip
							</Button>
						)}
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? "Finish" : "Next"}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Box>
	);
}

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
// 	[`&.${stepConnectorClasses.alternativeLabel}`]: {
// 		top: 10,
// 		left: "calc(-50% + 16px)",
// 		right: "calc(50% + 16px)",
// 	},
// 	[`&.${stepConnectorClasses.active}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			borderColor: "#784af4",
// 		},
// 	},
// 	[`&.${stepConnectorClasses.completed}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			borderColor: "#784af4",
// 		},
// 	},
// 	[`& .${stepConnectorClasses.line}`]: {
// 		borderColor:
// 			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
// 		borderTopWidth: 3,
// 		borderRadius: 1,
// 	},
// }));

// const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
// 	({ theme, ownerState }) => ({
// 		color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
// 		display: "flex",
// 		height: 22,
// 		alignItems: "center",
// 		...(ownerState.active && {
// 			color: "#784af4",
// 		}),
// 		"& .QontoStepIcon-completedIcon": {
// 			color: "#784af4",
// 			zIndex: 1,
// 			fontSize: 18,
// 		},
// 		"& .QontoStepIcon-circle": {
// 			width: 8,
// 			height: 8,
// 			borderRadius: "50%",
// 			backgroundColor: "currentColor",
// 		},
// 	})
// );

// function QontoStepIcon(props: StepIconProps) {
// 	const { active, completed, className } = props;

// 	return (
// 		<QontoStepIconRoot ownerState={{ active }} className={className}>
// 			{completed ? (
// 				<Check className="QontoStepIcon-completedIcon" />
// 			) : (
// 				<div className="QontoStepIcon-circle" />
// 			)}
// 		</QontoStepIconRoot>
// 	);
// }

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
// 	[`&.${stepConnectorClasses.alternativeLabel}`]: {
// 		top: 22,
// 	},
// 	[`&.${stepConnectorClasses.active}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			backgroundImage:
// 				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
// 		},
// 	},
// 	[`&.${stepConnectorClasses.completed}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			backgroundImage:
// 				"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
// 		},
// 	},
// 	[`& .${stepConnectorClasses.line}`]: {
// 		height: 3,
// 		border: 0,
// 		backgroundColor:
// 			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
// 		borderRadius: 1,
// 	},
// }));

// const ColorlibStepIconRoot = styled("div")<{
// 	ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
// 	backgroundColor:
// 		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
// 	zIndex: 1,
// 	color: "#fff",
// 	width: 50,
// 	height: 50,
// 	display: "flex",
// 	borderRadius: "50%",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	...(ownerState.active && {
// 		backgroundImage:
// 			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
// 		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
// 	}),
// 	...(ownerState.completed && {
// 		backgroundImage:
// 			"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
// 	}),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
// 	const { active, completed, className } = props;

// 	const icons: { [index: string]: React.ReactElement } = {
// 		1: <Settings />,
// 		2: <GroupAdd />,
// 		3: <VideoLabel />,
// 	};

// 	return (
// 		<ColorlibStepIconRoot
// 			ownerState={{ completed, active }}
// 			className={className}
// 		>
// 			{icons[String(props.icon)]}
// 		</ColorlibStepIconRoot>
// 	);
// }

// export function CustomizedSteppers() {
// 	return (
// 		<Stack sx={{ width: "100%" }} spacing={4}>
// 			<Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
// 				{steps.map((label) => (
// 					<Step key={label}>
// 						<StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
// 					</Step>
// 				))}
// 			</Stepper>
// 			<Stepper
// 				alternativeLabel
// 				activeStep={1}
// 				connector={<ColorlibConnector />}
// 			>
// 				{steps.map((label) => (
// 					<Step key={label}>
// 						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
// 					</Step>
// 				))}
// 			</Stepper>
// 		</Stack>
// 	);
// }

// export function BasicDatePicker() {
// 	const [value, setValue] = React.useState<Dayjs | null>(null);

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<DatePicker
// 				label="Basic example"
// 				value={value}
// 				onChange={(newValue) => {
// 					setValue(newValue);
// 				}}
// 				renderInput={(params) => <TextField {...params} />}
// 			/>
// 		</LocalizationProvider>
// 	);
// }

// export function StaticDatePickerDemo() {
// 	const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<StaticDatePicker
// 				displayStaticWrapperAs="desktop"
// 				openTo="year"
// 				value={value}
// 				onChange={(newValue) => {
// 					setValue(newValue);
// 				}}
// 				renderInput={(params) => <TextField {...params} />}
// 			/>
// 		</LocalizationProvider>
// 	);
// }

// const isWeekend = (date: Dayjs) => {
// 	const day = date.day();

// 	return day === 0 || day === 6;
// };

// export function StaticDatePickerLandscape() {
// 	const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<StaticDatePicker
// 				orientation="landscape"
// 				openTo="day"
// 				value={value}
// 				shouldDisableDate={isWeekend}
// 				onChange={(newValue) => {
// 					setValue(newValue);
// 				}}
// 				renderInput={(params) => <TextField {...params} />}
// 			/>
// 		</LocalizationProvider>
// 	);
// }

const StyleGuide: React.FC = () => {
	return (
		<LayoutWrapper>
			<Container>
				<h1>Style Guide</h1>

				<Divider />

				<h2>Typography</h2>
				<Types />

				<h2>Color Palette</h2>
				<h3>Dark Mode</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "darkMode.dark",
								color: "darkMode.contrastText",
								p: 2,
							}}
						>
							darkMode.dark
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "darkMode.medium",
								color: "darkMode.contrastText",
								p: 2,
							}}
						>
							darkMode.medium
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "darkMode.light",
								color: "darkMode.contrastText",
								p: 2,
							}}
						>
							darkMode.light
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "darkMode.white",
								color: "darkMode.contrastText",
								p: 2,
							}}
						>
							darkMode.white
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "darkMode.grey",
								color: "darkMode.contrastText",
								p: 2,
							}}
						>
							darkMode.grey
						</Box>
					</Grid>
				</Grid>
				<h3>Layout</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "secondary.main",
								color: "secondary.contrastText",
								p: 2,
							}}
						>
							secondary.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "secondary.medium",
								color: "secondary.contrastText",
								p: 2,
							}}
						>
							secondary.medium
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "secondary.light",
								color: "secondary.contrastText",
								p: 2,
							}}
						>
							secondary.light
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "secondary.pastel",
								color: "secondary.contrastText",
								p: 2,
							}}
						>
							secondary.pastel
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "secondary.bright",
								color: "secondary.contrastText",
								p: 2,
							}}
						>
							secondary.bright
						</Box>
					</Grid>
				</Grid>
				<h3>Main</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "primary.main",
								color: "primary.contrastText",
								p: 2,
							}}
						>
							primary.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{ bgcolor: "error.main", color: "error.contrastText", p: 2 }}
						>
							error.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "warning.main",
								color: "warning.contrastText",
								p: 2,
							}}
						>
							warning.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}
						>
							info.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "success.main",
								color: "success.contrastText",
								p: 2,
							}}
						>
							success.main
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "highlight.main",
								color: "highlight.contrastText",
								p: 2,
							}}
						>
							highlight.main
						</Box>
					</Grid>
				</Grid>

				<h3>Neo - Bright</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.pink",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright.pink
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.green",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright.green
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.yellow",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.red",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright.red
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.purple",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright.purple
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoBright.blue",
								color: "neoBright.contrastText",
								p: 2,
							}}
						>
							neoBright.blue
						</Box>
					</Grid>
				</Grid>

				<h3>Neo - Pastel</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoPastel.green",
								color: "neoPastel.contrastText",
								p: 2,
							}}
						>
							neoPastel.green
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoPastel.yellow",
								color: "neoPastel.contrastText",
								p: 2,
							}}
						>
							neoPastel.yellow
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoPastel.red",
								color: "neoPastel.contrastText",
								p: 2,
							}}
						>
							neoPastel.red
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoPastel.purple",
								color: "neoPastel.contrastText",
								p: 2,
							}}
						>
							neoPastel.purple
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box
							sx={{
								bgcolor: "neoPastel.blue",
								color: "neoPastel.contrastText",
								p: 2,
							}}
						>
							neoPastel.blue
						</Box>
					</Grid>
				</Grid>

				<Divider />

				<h2>Components</h2>

				<h3>Autocomplete</h3>
				<ComboBox />

				<h3>Buttons</h3>
				<BasicButtons />
				<br />
				<TextButtons />

				<h3>Button Groups</h3>
				<BasicButtonGroup />
				<br />
				<VariantButtonGroup />
				<br />
				<GroupOrientation />
				<br />
				<SplitButton />

				<h3>Checkbox</h3>
				<Checkboxes />
				<br />
				<CheckboxLabels />

				<h3>Radio Group</h3>
				<RadioButtonsGroup />
				<br />
				<RowRadioButtonsGroup />

				<h3>Rating</h3>
				<BasicRating />

				<h3>Select</h3>
				<BasicSelect />
				<br />
				<SelectVariants />

				<h3>Text Field</h3>
				<BasicTextFields />

				<Divider />

				<h2>Data Display</h2>

				<h3>Chip</h3>
				<BasicChips />
				<br />
				<ClickableAndDeletableChips />

				<h3>Divider</h3>
				<ListDividers />

				<h3>Table</h3>
				{/* <BasicTable /> */}
				<DataTable />

				<Divider />

				<h2>Feedback</h2>

				<h3>Alerts</h3>
				{/* <BasicAlerts /> */}
				{/* <BasicOutlinedAlerts /> */}
				<BasicFilledAlerts />

				<Divider />

				<h2>Surfaces</h2>

				<h3>Cards</h3>
				<BasicCard />
				<br />
				<OutlinedCard />
				<br />
				<MediaCard />
				<br />
				<MediaControlCard />

				<h3>Paper</h3>
				<SimplePaper />

				<Divider />

				<h2>Navigation</h2>

				<h3>Breadcrumbs</h3>
				<BasicBreadcrumbs />
				<br />
				<CustomSeparator />
				<br />
				<IconBreadcrumbs />

				<h3>Pagination</h3>
				<BasicPagination />
				<br />
				<PaginationOutlined />
				<br />
				<PaginationRounded />
				<br />
				<CustomIcons />

				<h3>Stepper</h3>
				<HorizontalLinearStepper />
				{/* <CustomizedSteppers /> */}

				<Divider />
				{/* <h2>MUI X</h2>

				<h3>Date Pickers</h3>
				<BasicDatePicker />
				<StaticDatePickerDemo />
				<StaticDatePickerLandscape /> */}
			</Container>
		</LayoutWrapper>
	);
};

export default StyleGuide;
