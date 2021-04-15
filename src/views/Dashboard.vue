<template>
  <div id="dash" class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3 sidebar">
        <b-card
          title="Filtros"
          tag="article"
          class="my-2"
          bg-variant="dark"
          text-variant="white"
        >
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <div class="row">
              <div class="col-12">
                <b-form-input
                  id="input-title"
                  v-model="filters.title"
                  type="text"
                  placeholder="Buscar por Título"
                >
                </b-form-input>
                <div class="col-12 my-3">
                  <b-form-checkbox
                    id="cheack-my-jobs"
                    v-model="filters.myJobs"
                    name="myJobs"
                    value="true"
                    unchecked-value="false"
                  >
                    Meus Projetos
                  </b-form-checkbox>
                </div>
                <div class="col-12">
                  <b-button type="submit" variant="primary" size="lg" block
                    >Buscar</b-button
                  >
                  <b-button type="reset" variant="danger" size="sm" block
                    >Limpar</b-button
                  >
                </div>
              </div>
            </div>
          </b-form>
        </b-card>
      </div>
      <div class="col-12 col-sm-8 col-md-9 lista"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: null,
      filters: {
        title: "",
        myJobs: false,
      },
      pagination: {
        offset: 0,
        limit: 5,
        count: 0,
      },
    };
  },
};
</script>
<style></style>
