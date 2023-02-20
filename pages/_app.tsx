import React from "react";
import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
import {
	notificationProvider,
	RefineSnackbarProvider,
	CssBaseline,
	GlobalStyles,
	ReadyPage,
	ErrorComponent,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";

import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

import { ColorModeContextProvider } from "@contexts";

import { AuthPage } from "@components/pages/auth";
import { Title, Sider, Layout, Header } from "@components/layout";
import { OffLayoutArea } from "@components/offLayoutArea";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ColorModeContextProvider>
			<CssBaseline />
			<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
			<RefineSnackbarProvider>
				<RefineKbarProvider>
					<Refine
						routerProvider={routerProvider}
						LoginPage={() => (<AuthPage type="login"/>)}
						authProvider={authProvider}
						dataProvider={dataProvider(supabaseClient)}
						notificationProvider={notificationProvider}
						ReadyPage={ReadyPage}
						catchAll={<ErrorComponent />}
						resources={[
							{
								name: "profiles",
								list: MuiInferencer,
								edit: MuiInferencer,
								show: MuiInferencer,
								create: MuiInferencer,
								canDelete: true,
							},
							{
								name: "foods",
								list: MuiInferencer,
								edit: MuiInferencer,
								show: MuiInferencer,
								create: MuiInferencer,
								canDelete: true,
							},
							{
								name: "meal_plans",
								list: MuiInferencer,
								edit: MuiInferencer,
								show: MuiInferencer,
								create: MuiInferencer,
								canDelete: true,
							},
						]}
						Title={Title}
						Sider={Sider}
						Layout={Layout}
						Header={Header}
						OffLayoutArea={OffLayoutArea}
						options={{
							syncWithLocation: true,
							warnWhenUnsavedChanges: true,
						}}
					>
						<Component {...pageProps} />
					</Refine>
				</RefineKbarProvider>
			</RefineSnackbarProvider>
		</ColorModeContextProvider>
	);
}

export default MyApp;
