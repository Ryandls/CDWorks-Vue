<template>
  <div class="home text-center">
    <b-jumbotron header="CDWorks" lead="Os melhores programadores estão aqui!"
      ><p>
        Invista seus projetos de desenvolvimento de software com quem entende do
        assunto.
      </p>
      <b-button variant="primary" @click="$router.push('/register')"
        >Mais Informações
      </b-button>
    </b-jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 pb-2">
          <b-card
            border-variant="primary"
            body-text-variant="primary"
            title="Sou Freelancer"
            sub-title="Busque um novo Projeto."
            text-variant="black"
          >
            <b-card-text>
              Trabalhe em projetos interessantes.
            </b-card-text>

            <router-link
              to="/register"
              class="card-link text-white btn btn-primary"
              >Cadastrar-se</router-link
            >
          </b-card>
        </div>
        <div class="col-12 col-sm-6 pb-2">
          <b-card
            border-variant="danger"
            body-text-variant="danger"
            title="Busco Freelancer"
            sub-title="Cadastre seu Projeto"
            text-variant="black"
          >
            <b-card-text>
              Venha para nossa plataforma.
            </b-card-text>

            <router-link
              to="/register"
              class="card-link text-white btn btn-danger"
              >Cadastrar-se</router-link
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
