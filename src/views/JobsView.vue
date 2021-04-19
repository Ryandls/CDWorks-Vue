<template>
  <div id="dash" class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3 sidebar">
        <JobCard v-for="job in jobs" :key="job.id" :job="job">
          <template slot="actions">
            <b-button
              variant="primary"
              @click="() => $router.push(`/jobs/${job.id}/edit`)"
              >Editar</b-button
            >
          </template>
        </JobCard>
      </div>
    </div>
  </div>
</template>
<script>
import { apiProtected } from "../services/apiService";
import JobCard from "../components/JobCard";
export default {
  components: {
    JobCard,
  },
  data: () => ({
    job: null,
  }),
  async mounted() {
    const response = await apiProtected(`jobs/${this.$route.params.id}`);
    this.job = response.data.data;
  },
  computed: {
    isJobsOwner() {
      return this.job.userId == this.$store.state.user.id;
    },
  },
};
</script>
<style></style>
