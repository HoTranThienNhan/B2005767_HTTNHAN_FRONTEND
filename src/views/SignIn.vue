<script setup>
import UserService from "@/services/user.service";
import SignInForm from "@/components/SignInForm.vue";
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const authStore = useAuthStore();

let user = ref({});
let message = ref("");

const signin = async (data) => {
    try {
        await authStore.signinStore(data);

        await UserService.signin(data);

        alert("Đăng nhập thành công");
        // message.value = "Đăng nhập thành công.";
    } catch (error) {
        message.value = error?.response?.data?.message;
    }
}
</script>

<template>
    <div class="page mt-5">
        <div class="card p-5" style="box-shadow: #b8b8b8 0px 1px 3px 1px;">
            <div class="m-4">
                <h3 class="d-flex justify-content-center">ĐĂNG NHẬP</h3>
                <h6 class="mb-4 d-flex justify-content-center">Chào mừng bạn đến ứng dụng Quản Lý Danh Bạ.</h6>
                <SignInForm :user="user" @submit:signin="signin" />
                <p class="msg-error">{{ message }}</p>
                <div class="mt-1">
                    Chưa có tài Khoản? <router-link :to="{ name: 'contact.signup' }">Đăng Ký</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.msg-error {
    color: red;
}
</style>

