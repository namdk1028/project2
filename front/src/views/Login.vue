<template>
  <div class="Login">
    <h1>This is Login Page</h1>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8" md="6" lg="4" style="max-height:800px; ">
            <v-form class="form" ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="email" :rules="emailRules" label="이메일" required outlined dense></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[rules.required, rules.min]"
                label="비밀번호"
                @click:append="show = !show"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                outlined
                dense
              ></v-text-field>
              <v-btn large class="button" :disabled="!valid" color="#0277BD" @click="login">로그인</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    id: 0,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "이메일을 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "올바른 양식의 이메일을 입력해주세요",
    ],
    password: "",
    rules: {
      required: (value) => !!value || "비밀번호를 입력해주세요.",
      min: (v) => (v && v.length >= 8) || "비밀번호는 8글자 이상 입력해주세요",
    },
    checkbox: false,
    show: false,
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

<style>
.login-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
}

.form .button {
  cursor: pointer;
  color: #fff;
  display: block;
  font-size: 16px;
  width: 100%;
  padding: px;
}
.add-option .routers {
  margin: 0 5px;
  text-decoration: none;
  color: #222;
}
</style>