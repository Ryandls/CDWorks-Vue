<template>
  <div id="register" class="container">
    <div class="row">
      <div class="col-12 col-sm-2 offset-sm-2 col-md-6 offset-md-3 mt-3">
        <h2>Faça seu Cadastro</h2>
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
            id="input-group-name"
            label="Nome:"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              v-model="form.name"
              type="text"
              :state="error.name.state"
              placeholder="Informe seu nome completo"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-name-feedback"
              >{{ error.name.message }}
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              :state="error.email.state"
              placeholder="Informe seu email"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-email-feedback"
              >{{ error.email.message }}
            </b-form-invalid-feedback>
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
              :state="error.password.state"
              placeholder="Digite sua senha"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-password-feedback"
              >{{ error.password.message }}
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-password-confirmation"
            label="Confirmação de senha:"
            label-for="input-password-confirmation"
          >
            <b-form-input
              id="input-password-confirmation"
              v-model="form.passwordConfirmation"
              type="password"
              placeholder="Repita sua senha"
            >
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" size="lg" block
            >Enviar</b-button
          >
          <b-button type="reset" variant="danger" size="sm" block
            >Limpar</b-button
          >

          <b-button
            @click="$router.push('login')"
            variant="outline-info"
            size="sm"
            block
            >Já tem Cadastro?</b-button
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
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null,
    },
    show: true,
    error: {
      message: null,
      name: {
        state: null,
        message: null,
      },
      email: {
        state: null,
        message: null,
      },
      password: {
        state: null,
        message: null,
      },
    },
  }),
  methods: {
    onReset() {
      this.form = {
        form: {
          name: null,
          email: null,
          password: null,
          passwordConfirmation: null,
        },
      };
    },
    errorReset() {
      this.error = {
        message: null,
        name: {
          state: null,
          message: null,
        },
        email: {
          state: null,
          message: null,
        },
        password: {
          state: null,
          message: null,
        },
      };
    },
    async onSubmit() {
      try {
        this.errorReset();
        if (this.form.passwordConfirmation !== this.form.password) {
          this.error.message = "Senhas não coincidem!";
          this.error.password.state = false;
          this.error.password.message = "As senhas devem ser iguais.";
          return;
        }

        await apiPublic.post("/users", {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        });
        this.$router.push("login");
      } catch (error) {
        console.error(error.response.data);
        this.error.message = "Não foi possível cadastrar!";
        if (!error.response || !error.response.data) return;

        if (error.response.data.message)
          this.error.message = error.response.data.message;

        if (error.response.data.error) {
          error.response.data.error.forEach((err) => {
            this.error[err.field].state = false;
            this.error[err.field].message = err.message;
          });
        }
      }
    },
  },
};
</script>
<style></style>
