<template>
    <Form @submit="submitSignup" :validation-schema="userFormSchema">
        <div class="row">
            <div class="form-group col-md-12">
                <label for="name">Họ Tên</label>
                <Field name="name" type="name" class="form-control" v-model="userLocal.name" />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="email">E-mail</label>
                <Field name="email" type="email" class="form-control" v-model="userLocal.email" />
                <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="phone">Số Điện Thoại</label>
                <Field name="phone" type="phone" class="form-control" v-model="userLocal.phone" />
                <ErrorMessage name="phone" class="error-feedback" />
            </div>
            <div class="form-group col-md-12">
                <label for="address">Địa Chỉ</label>
                <Field name="address" type="address" class="form-control" v-model="userLocal.address" />
                <ErrorMessage name="address" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="password">Mật Khẩu</label>
                <Field name="password" type="password" class="form-control" v-model="userLocal.password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="form-group col-md-6">
                <label for="confirmPassword">Nhập lại mật Khẩu</label>
                <Field name="confirmPassword" type="password" class="form-control" v-model="userLocal.confirmPassword" />
                <ErrorMessage name="confirmPassword" class="error-feedback" />
            </div>
            <div class="form-group col-md-12">
                <button class="btn btn-primary w-100 mt-3">
                    Đăng Ký
                </button>
            </div>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:signup"],
    props: {
        user: { type: Object, required: true }
    },
    data() {
        const userFormSchema = yup.object().shape({
            name: yup
                .string(),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup
                .string(),
            confirmPassword: yup
                .string(),
            address: yup
                .string(),
            phone: yup
                .string()
                .matches(/^[0]\d{9}$/, "Số điện thoại không hợp lệ.")
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // userLocal để liên kết với các input trên form
            userLocal: this.user,
            userFormSchema,
        };
    },
    methods: {
        submitSignup() {
            this.$emit("submit:signup", this.userLocal);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>