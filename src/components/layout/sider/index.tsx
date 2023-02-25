import React, { useState } from "react";
import {
	Box,
	Drawer,
	Sider as DefaultSider,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Tooltip,
	Button,
	IconButton,
	MuiList,
} from "@pankod/refine-mui";
import {
	ListOutlined,
	Logout,
	ExpandLess,
	ExpandMore,
	ChevronLeft,
	ChevronRight,
	MenuRounded,
	Dashboard,
} from "@mui/icons-material";
import {
	CanAccess,
	ITreeMenu,
	useIsExistAuthentication,
	useLogout,
	useTitle,
	useTranslate,
	useRouterContext,
	useMenu,
	useRefineContext,
} from "@pankod/refine-core";

import { Title as DefaultTitle } from "../title";

export const Sider: typeof DefaultSider = ({ render }) => {
	const [collapsed, setCollapsed] = useState(false);
	const [opened, setOpened] = useState(false);

	const drawerWidth = () => {
		if (collapsed) return 64;
		return 200;
	};

	// TODO: Separate Logout and other links (space-between)

	const t = useTranslate();
	const { Link } = useRouterContext();
	const { hasDashboard } = useRefineContext();
	const translate = useTranslate();

	const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
	const isExistAuthentication = useIsExistAuthentication();
	const { mutate: mutateLogout } = useLogout();
	const Title = useTitle();

	const [open, setOpen] = useState<{ [k: string]: any }>({});

	React.useEffect(() => {
		setOpen((previousOpen) => {
			const previousOpenKeys: string[] = Object.keys(previousOpen);
			const uniqueKeys = new Set([...previousOpenKeys, ...defaultOpenKeys]);
			const uniqueKeysRecord = Object.fromEntries(
				Array.from(uniqueKeys.values()).map((key) => [key, true])
			);
			return uniqueKeysRecord;
		});
	}, [defaultOpenKeys]);

	const RenderToTitle = Title ?? DefaultTitle;

	const handleClick = (key: string) => {
		setOpen({ ...open, [key]: !open[key] });
	};

	const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
		return tree.map((item: ITreeMenu) => {
			const { icon, label, route, name, children, parentName } = item;
			const isOpen = open[route || ""] || false;

			const isSelected = route === selectedKey;
			const isNested = !(parentName === undefined);

			if (children.length > 0) {
				return (
					<CanAccess
						key={route}
						resource={name.toLowerCase()}
						action="list"
						params={{
							resource: item,
						}}
					>
						<div key={route}>
							<Tooltip
								title={label ?? name}
								placement="right"
								disableHoverListener={!collapsed}
								arrow
							>
								<ListItemButton
									onClick={() => {
										if (collapsed) {
											setCollapsed(false);
											if (!isOpen) {
												handleClick(route || "");
											}
										} else {
											handleClick(route || "");
										}
									}}
									sx={{
										pl: isNested ? 4 : 2,
										justifyContent: "center",
										"&.Mui-selected": {
											"&:hover": {
												backgroundColor: "transparent",
											},
											backgroundColor: "transparent",
										},
									}}
								>
									<ListItemIcon
										sx={{
											justifyContent: "center",
											minWidth: 36,
											color: "secondary.contrastText",
										}}
									>
										{icon ?? <ListOutlined />}
									</ListItemIcon>
									<ListItemText
										primary={label}
										primaryTypographyProps={{
											noWrap: true,
											fontSize: "14px",
											fontWeight: isSelected ? "bold" : "normal",
											color: "secondary.contrastText"
										}}
									/>
									{!collapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}
								</ListItemButton>
							</Tooltip>
							{!collapsed && (
								<Collapse in={open[route || ""]} timeout="auto" unmountOnExit>
									<MuiList component="div" disablePadding>
										{renderTreeView(children, selectedKey)}
									</MuiList>
								</Collapse>
							)}
						</div>
					</CanAccess>
				);
			}

			return (
				<CanAccess
					key={route}
					resource={name.toLowerCase()}
					action="list"
					params={{ resource: item }}
				>
					<Tooltip
						title={label ?? name}
						placement="right"
						disableHoverListener={!collapsed}
						arrow
					>
						{/* REF: ACTUAL LINKS */}
						<ListItemButton
							component={Link}
							to={route}
							selected={isSelected}
							onClick={() => {
								setOpened(false);
							}}
							sx={{
								pl: isNested ? 4 : 2,
								py: isNested ? 1.25 : 1,
								"&.Mui-selected": {
									"&:hover": {
										backgroundColor: "secondary.bright",
									},
									backgroundColor: "secondary.light",
								},
								"&:hover": {
									backgroundColor: "secondary.bright"
								},
								justifyContent: "center",
							}}
						>
							<ListItemIcon
								sx={{
									justifyContent: "center",
									minWidth: 36,
									color: "secondary.contrastText",
								}}
							>
								{icon ?? <ListOutlined />}
							</ListItemIcon>
							<ListItemText
								primary={label}
								primaryTypographyProps={{
									noWrap: true,
									fontSize: "14px",
									fontWeight: isSelected ? "bold" : "normal",
									color: "secondary.contrastText"
								}}
							/>
						</ListItemButton>
					</Tooltip>
				</CanAccess>
			);
		});
	};

	// REF: DASHBOARD
	const dashboard = hasDashboard ? (
		<CanAccess resource="dashboard" action="list">
			<Tooltip
				title={translate("dashboard.title", "Dashboard")}
				placement="right"
				disableHoverListener={!collapsed}
				arrow
			>
				<ListItemButton
					component={Link}
					to="/"
					selected={selectedKey === "/"}
					onClick={() => {
						setOpened(false);
					}}
					sx={{
						pl: 2,
						py: 1,
						"&.Mui-selected": {
							"&:hover": {
								backgroundColor: "secondary.bright",
							},
							backgroundColor: "secondary.light",
						},
						"&:hover": {
							backgroundColor: "secondary.bright"
						},
						justifyContent: "center",
					}}
				>
					<ListItemIcon
						sx={{
							justifyContent: "center",
							minWidth: 36,
							color: "secondary.contrastText",
						}}
					>
						<Dashboard />
					</ListItemIcon>
					<ListItemText
						primary={translate("dashboard.title", "Dashboard")}
						primaryTypographyProps={{
							noWrap: true,
							fontSize: "14px",
							fontWeight: selectedKey === "/" ? "bold" : "normal",
							color: "secondary.contrastText"
						}}
					/>
				</ListItemButton>
			</Tooltip> 
		</CanAccess>
	) : null;
	
	// REF: LOGOUT
	const logout = isExistAuthentication && (
		<Tooltip
			title={t("buttons.logout", "Logout")}
			placement="right"
			disableHoverListener={!collapsed}
			arrow
		>
			<ListItemButton
				key="logout"
				onClick={() => mutateLogout()}
				sx={{ 
					justifyContent: "center",
					"&:hover": {
						backgroundColor: "transparent"
					},
				}}
			>
				<ListItemIcon
					sx={{
						justifyContent: "center",
						minWidth: 36,
						color: "secondary.contrastText",
					}}
				>
					<Logout />
				</ListItemIcon>
				<ListItemText
					primary={t("buttons.logout", "Logout")}
					primaryTypographyProps={{
						noWrap: true,
						fontSize: "14px",
						color: "secondary.contrastText"
					}}
				/>
			</ListItemButton>
		</Tooltip>
	);

	const items = renderTreeView(menuItems, selectedKey);

	const renderSider = () => {
		if (render) {
			return render({
				dashboard,
				logout,
				items,
				collapsed,
			});
		}
		return (
			<Box>
				{/* REF: RENDERS LINKS */}
				{dashboard}
				{items}
				<Box sx={{ display: { sx: "block", md: "none" }}}>{logout}</Box>
			</Box>
		);
	};

	const drawer = (
		<MuiList disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>
			{renderSider()}
		</MuiList>
	);

	return (
		<>
			<Box
				sx={{
					width: { xs: drawerWidth() },
					display: {
						xs: "none",
						md: "block",
					},
					transition: "width 0.3s ease",
				}}
			/>
			<Box
				component="nav"
				sx={{
					position: "fixed",
					zIndex: 1101,
					width: { sm: drawerWidth() },
					display: "flex",
				}}
			>
				{/* REF: MOBILE VIEW OF SIDE BAR */}
				<Drawer
					variant="temporary"
					open={opened}
					onClose={() => setOpened(false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { sm: "block", md: "none" },
						"& .MuiDrawer-paper": {
							width: 256,
							bgcolor: "secondary.main",
							borderRight: "4px solid #000000",
						},
						boxShadow: "none",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<RenderToTitle collapsed={false} />
					</Box>
					{drawer}
				</Drawer>
				{/* REF: DESKTOP VIEW */}
				<Drawer
					variant="permanent"
					PaperProps={{ elevation: 1 }}
					sx={{
						display: { xs: "none", md: "block" },
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							bgcolor: "secondary.main",
							overflow: "hidden",
							transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
							borderRight: "4px solid #000000",
							boxShadow: "none",
						},
					}}
					open
				>
					{/* REF: LOGO / TITLE */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginTop: "15px",
						}}
					>
						<RenderToTitle collapsed={collapsed} />
					</Box> 
					<Box
						sx={{
							flexGrow: 1,
							overflowX: "hidden",
							overflowY: "auto",
						}}
					>
						{/* REF: ENTIRE SIDE BAR */}
						{drawer}
					</Box>
					{/* REF: BOTTOM OF SIDE BAR */}
					<Button
						sx={{
							color: "secondary.contrastText",
							borderRadius: 0,
							borderTop: "2px solid #000000",
						}}
						fullWidth
						size="large"
					>
						{logout}
					</Button>
					<Button
						sx={{
							background: "rgba(0,0,0,.2)",
							color: "secondary.contrastText",
							textAlign: "center",
							borderRadius: 0,
							borderTop: "2px solid #000000",
						}}
						fullWidth
						size="large"
						onClick={() => setCollapsed((prev) => !prev)}
					>
						{collapsed ? <ChevronRight /> : <ChevronLeft />}
					</Button>
				</Drawer>
				{/* REF: MOBILE ICON TO OPEN SIDE BAR */}
				<Box
					sx={{
						display: { xs: "block", md: "none" },
						position: "fixed",
						top: "64px",
						left: "0px",
						borderRadius: "0 6px 6px 0",
						bgcolor: "secondary.main",
						zIndex: 1199,
						borderRight: "4px solid #000000",
						borderTop: "4px solid #000000",
						borderBottom: "4px solid #000000",
					}}
				>
					<IconButton
						sx={{ color: "#fff", width: "36px" }}
						onClick={() => setOpened((prev) => !prev)}
					>
						<MenuRounded />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};
