<script setup>
import UserService from "@/services/user.service";
import SignUpForm from "@/components/SignUpForm.vue";
import { ref } from 'vue';
import { router } from '@/router';


let user = ref({});
let message = ref("");

const signup = async (data) => {
    try {
        await UserService.signup(data);
        // message.value = "Đăng ký thành công.";
        alert("Đăng ký thành công");

        router.push({ name: "contact.signin" });
    } catch (error) {
        message.value = error?.response?.data?.message;
    }
}
</script>

<template>
    <div class="page mt-4 mb-5">
        <div class="card px-5 py-3" style="box-shadow: #b8b8b8 0px 1px 3px 1px;">
            <div class="m-3">
                <h3 class="d-flex justify-content-center">ĐĂNG KÝ</h3>
                <h6 class="mb-3 d-flex justify-content-center">Đăng ký tài khoản trên ứng dụng Quản Lý Danh Bạ.</h6>
                <SignUpForm :user="user" @submit:signup="signup" />
                <p class="msg-error">{{ message }}</p>
                <div class="mt-1">
                    Đã có tài Khoản? <router-link :to="{ name: 'contact.signin' }">Đăng Nhập</router-link>
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

