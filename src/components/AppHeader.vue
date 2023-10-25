<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
let user = ref(authStore?.user);

// watch the state of user (signed in or out), cart to update navbar header
watch(
    [authStore],
    () => {
        user.value = authStore?.user;
    },
    { deep: true }
);

const signout = async () => {
    await authStore.signoutStore();

}
</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li v-if="user" class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
            <li v-if="user" class="nav-item">
                <div class="nav-link cursor-context-menu">
                    {{ user?.name }}
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
            </li>

            <li v-if="user" class="nav-item">
                <span v-on:click="signout" class="nav-link cursor-pointer">
                    Đăng Xuất
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>
            </li>

            <li v-if="!user" class="nav-item">
                <router-link :to="{ name: 'contact.signin' }" class="nav-link">
                    Đăng Nhập
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                </router-link>
            </li>

            <li v-if="!user" class="nav-item">
                <router-link :to="{ name: 'contact.signup' }" class="nav-link">
                    Đăng Ký
                    <i class="fa fa-key" aria-hidden="true"></i>
                </router-link>
            </li>

        </div>
    </nav>
</template>

<style>
.cursor-pointer {
    cursor: pointer;
}
.cursor-context-menu {
    cursor: context-menu;
}
</style>