import { GetServerSideProps } from "next";
import {
	NextRouteComponent,
	handleRefineParams,
	checkAuthentication,
} from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";

import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

export const getServerSideProps: GetServerSideProps<{
	initialData?: unknown;
}> = async (context) => {
	// req, res

	const { resource, action, id } = handleRefineParams(context.params?.refine);
	// console.log("refine params: ", resource, action, id);
	// resource === login || registration-success
	// action === undefined
	// id === undefined

	const { isAuthenticated, ...props } = await checkAuthentication(
		authProvider,
		context
	);

	if (!isAuthenticated && resource !== "registration-success") {
		// console.log("props: ", props); //  props: {redirect: { destination, permanent } } || props: {}
		return props;
	}

	try {
		if(resource === "registration-success"){
			// console.log("landed here")
			return {props: {}};

		} else if (resource && action === "show" && id) {
			// console.log("resource && action === show and id is: ", id);
			const data = await dataProvider(supabaseClient).getOne({
				resource: resource.slice(resource.lastIndexOf("/") + 1),
				id,
			});
			// console.log("data from getOne is: ", data);
			// console.log("props initial data... ", props, " and ", props.initialData);
			return {
				props: {
					// initialData: data,
				},
			};
		} else if (resource && !action && !id) {
			// console.log("resource, action, and id -- get list");
			const data = await dataProvider(supabaseClient).getList({
				resource: resource.slice(resource.lastIndexOf("/") + 1),
			});
			// console.log("data from getOne is: ", data);
			// console.log("props initial data... ", props, " and ", props.initialData);
			return {
				props: {
					initialData: data,
				},
			};
		}
	} catch (error) {
		// console.error("error: ", error);
		return { props: {} };
	}
	// console.log("last props: ", props);

	return {
		props: {},
	};
};

export default NextRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
