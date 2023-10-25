<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm  
            :contact="contact"
            @submit:contact="addContact" 
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {},
            message: "",
            user: [],
        };
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },

        getAuthStore() {
            const authStore = useAuthStore();
            this.user = ref(authStore?.user);

            if (!this.user) {
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
    },
    created() {
        this.getAuthStore();
    },
};
</script>

