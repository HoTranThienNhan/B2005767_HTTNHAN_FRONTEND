import { defineStore } from 'pinia';

import { router } from '@/router';

import UserService from "@/services/user.service";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user'))
    }),
    actions: {
        async signinStore(data) {
            try {
                const signedInUser = await UserService.signin(data);

                // if sign in successfully
                if (signedInUser?._id) {
                    // update pinia state
                    this.user = signedInUser;

                    localStorage.clear();

                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(this.user));

                    // redirect to contact home page
                    router.push({ name: "contact.homepage" });
                }
            } catch (error) {
                console.log(error);
            }
        },
        signoutStore() {
            this.user = null;
            localStorage.removeItem('user');
            router.push({ name: "contact.signin" });
        }
    },
    persist: true,
});