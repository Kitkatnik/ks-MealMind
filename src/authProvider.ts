import { AuthProvider } from "@pankod/refine-core";

import nookies from "nookies";

import { supabaseClient } from "./utility";

export const authProvider: AuthProvider = {
	login: async ({ email, password }) => {
		const { data, error } = await supabaseClient.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return Promise.reject(error);
		}

		if (data?.session) {
			nookies.set(null, "token", data.session.access_token, {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
			return Promise.resolve();
		}

		// for third-party login
		return Promise.resolve(false);
	},
	logout: async () => {
		nookies.destroy(null, "token");
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			return Promise.reject(error);
		}

		return Promise.resolve("/");
	},
	checkError: () => Promise.resolve(),
	checkAuth: async (ctx) => {
		const { token } = nookies.get(ctx);
		const { data } = await supabaseClient.auth.getUser(token);
		const { user } = data;

		if (user) {
			return Promise.resolve();
		}

		return Promise.reject();
	},
	getPermissions: async () => {
		const user = await supabaseClient.auth.getUser();

		if (user) {
			return Promise.resolve(user.data.user?.role);
		}
	},
	getUserIdentity: async () => {
		const { data: { user }  } = await supabaseClient.auth.getUser();

		if (user) {
			return Promise.resolve({
				...user,
				name: user.email,
			});
		}
		return Promise.reject()
	},
	register: async ({ email, password }) => {
		const { data, error } = await supabaseClient.auth.signUp({
			email,
			password
		});

		if (error) {
			return Promise.reject(error);
		}

		if (data) {
			return Promise.resolve("/registration-success");
		}
	},
	forgotPassword: async ({ email }) => {
		const { data, error } = await supabaseClient.auth.resetPasswordForEmail(
			email,
			{
				redirectTo: `${window.location.origin}/update-password`,
			}
		);

		if (error) {
			return Promise.reject(error);
		}

		if (data) {
			return Promise.resolve();
		}
	},
	updatePassword: async ({ password }) => {
		const { data, error } = await supabaseClient.auth.updateUser({
			password,
		});

		if (error) {
			return Promise.reject(error);
		}

		if (data) {
			return Promise.resolve("/");
		}
	},
};
