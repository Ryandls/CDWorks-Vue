<template>
  <div class="profile">
    <h2>Habilidades</h2>
    <hr />
    <b-alert variant="danger" v-if="errorMessage" show>{{
      errorMessage
    }}</b-alert>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <div class="row">
        <div class="col-12 col-sm-6">
          <b-form-group
            id="input-group-skill"
            label="Habilidade"
            label-for="input-skill"
          >
            <b-form-select
              id="input-skill"
              v-model="form.skill"
              :options="skills"
            ></b-form-select>
          </b-form-group>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {},
    errorMessage: null,
    form: {
      skills: null,
      level: null,
    },
    skills: [],
  }),
  methods: {},
  async mounted() {
    this.user = this.$parent.user;
  },
};
</script>
<style></style>
