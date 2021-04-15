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
      <div class="col-12 col-sm-8 col-md-9 lista my-2">
        <b-button
          class="float-right"
          @click="() => $router.push('./jobs/new')"
          variant="success"
        >
          Novo Projeto</b-button
        >

        <h3>Projetos</h3>
        <hr />
        <div v-if="jobs && jobs.length > 0">
          <b-card
            v-for="job in jobs"
            :key="job.id"
            :title="job.title"
            :sub-title="job.Hirer.name"
            class="my-2"
            bg-variant="light"
          >
            <b-card-text>{{ job.description }}</b-card-text>
            <div class="row">
              <div class="col-6">
                <strong>Orçamento</strong>

                R${{ job.budget }}
              </div>
              <div class="col-6">
                <strong>Propostas até:</strong>

                {{ job.deadline }}
              </div>
            </div>
            <div class="text-right">
              <hr />

              <b-button variant="primary">Mais detalhes...</b-button>
            </div>
          </b-card>

          <div class="actions text-center">
            <b-button variant="primary" class="mr-2" @click="previus()"
              >Anterior</b-button
            >
            <b-button variant="primary" @click="next()">Proximo</b-button>
            <p class="text-muted">
              <small>
                Do projeto PRIMEIRO_REGISTRO até ÚLTIMO_REGISTRO - Total de
                TOTAL_REGISTROS projetos.</small
              >
            </p>
          </div>
        </div>

        <div v-else>
          <span class="text-muted"> Nenhum projeto encontrado....</span>
        </div>
      </div>
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
