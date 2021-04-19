<template>
  <div class="job-new">
    <div class="container mt-2">
      <div class="row">
        <div class="col-12">
          <h3>
            Novo Projeto
            <hr />

            <b-alert variant="danger" v-if="errorMessage" show>{{
              errorMessage
            }}</b-alert>
            <JobForm @submit="onSubmit"></JobForm>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiProtected } from "../services/apiService";
import JobForm from "./forms/JobForm";
export default {
  components: {
    JobForm,
  },
  data: () => ({
    errorMessage: "",
  }),
  methods: {
    async onSubmit(data) {
      try {
        const response = apiProtected.post("jobs/", data);
        const job = response.data.data;
        this.$router.push(`/jobs/${job.id}/show`);
      } catch (error) {
        this.errorMessage = "Erro ao tentar salvar os dados.";
      }
    },
  },
};
</script>

<style></style>
