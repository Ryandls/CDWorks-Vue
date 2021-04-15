<template>
  <div id="register" class="container">
    <div class="row">
      <div class="col-12 col-sm-2 offset-sm-2 col-md-6 offset-md-3 mt-3">
        <h2>Informe seu Login</h2>
        <hr />
        <b-alert variant="danger" v-if="error.message" show>
          {{ error.message }}
        </b-alert>
        <b-form
          v-if="show"
          @reset.prevent="onReset()"
          @submit.prevent="onSubmit()"
        >
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              placeholder="Informe seu email"
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-password"
            label="Senha:"
            label-for="input-password"
          >
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              placeholder="Digite sua senha"
            >
            </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" size="lg" block
            >Entrar</b-button
          >
          <b-button type="reset" variant="danger" size="sm" block
            >Limpar</b-button
          >

          <b-button
            @click="$router.push('/register')"
            variant="outline-info"
            size="sm"
            block
            >Não tem Cadastro?</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import { apiPublic } from "../services/apiService.js";
export default {
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    show: true,
    error: {
      message: null,
    },
  }),
  methods: {
    onReset() {
      this.form = {
        form: {
          email: null,
          password: null,
        },
      };
    },
    errorReset() {
      this.error = {
        message: null,
      };
    },
    async onSubmit() {
      try {
        this.errorReset();

        const response = await apiPublic.post("/users/login", {
          email: this.form.email,
          password: this.form.password,
        });
        const { user, token } = response.data.data;
        this.$store.dispatch("login", { user, token });
        this.$router.push("dashboard");
      } catch (error) {
        console.error(error.response.data);
        this.error.message = "Não foi possível efetuar o login!";
        if (!error.response || !error.response.data) return;

        if (error.response.data.message)
          this.error.message = error.response.data.message;
      }
    },
  },
};
</script>
<style></style>
