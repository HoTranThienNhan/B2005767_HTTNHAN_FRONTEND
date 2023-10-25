<script setup>
import { router } from '@/router';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';

const authStore = useAuthStore();
let user = ref(authStore?.user);

const goToSignIn = () => {
    router.push({ name: "contact.signin" });
}
const goToSignUp = () => {
    router.push({ name: "contact.signin" });
}
</script>

<template>
    <div class="page row d-flex align-items-center">
        <div class="mt-4 col-md-8">
            <div>
                <h3>QUẢN LÝ DANH BẠ CỦA BẠN</h3>
            </div>
            <div class="mt-4">
                We are here to help you manage your contacts in your own way.
            </div>
            <div class="mt-3">
                <button v-if="!user" v-on:click="goToSignIn" class="btn btn-outline-primary border-radius-25 px-3 py-2 mr-3">
                    Đăng Nhập
                </button>
                <button v-if="!user" v-on:click="goToSignUp"
                    class="btn btn-outline-secondary border-radius-25 px-3 py-2 button-homepage">
                    Đăng Ký
                </button>
            </div>
        </div>
        <div class="mt-4 col-md-4">
            <div>
                <img src="../assets/contact-management-homepage.png" class="image-homepage" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}

.image-homepage {
    width: 600px;
    border-radius: 25px;
}

.border-radius-25 {
    border-radius: 25px;
}

.button-homepage {
    width: 115px;
}
</style>