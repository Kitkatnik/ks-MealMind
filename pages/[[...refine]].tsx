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

	const { resource, action, id } = handleRefineParams(context.params?.refine);

	const { isAuthenticated, ...props } = await checkAuthentication(
		authProvider,
		context
	);

	if (!isAuthenticated) {
		return props;
	}

	try {
        if (resource && action === "show" && id) {
          const data = await dataProvider(supabaseClient).getOne({
            resource: resource.slice(resource.lastIndexOf("/") + 1),
            id,
          });
          return {
            props: {
              // initialData: data,
            },
          };
        } else if (resource && !action && !id) {
          const data = await dataProvider(supabaseClient).getList({
            resource: resource.slice(resource.lastIndexOf("/") + 1),
          });
          return {
            props: {
              initialData: data,
            },
          };
        }
      } catch (error) {
        console.error(error);
        return { props: {} };
      }
    
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
