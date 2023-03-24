<template>
  <div id="form">
    <br>
    <h1>Cadastro de Produtos</h1>
    <div id="form">
      <b-form inline @submit="cadastraproduto">

        <label class="sr-only" for="input-nome">Nome do Produto</label>
        <b-form-input
          id="input-nome"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Nome do Produto"
          v-model="NovoProduto.nome"
        ></b-form-input>

        <label class="sr-only" for="input-preco">Preço</label>
        <b-form-input
          id="input-preco"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Preço"
          v-model="NovoProduto.preco"
        ></b-form-input>

        <label class="sr-only" for="input-codbarra">Codigo de Barra</label>
        <b-form-input
          id="input-codbarra"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Digite aqui o Codigo de Barra"
          v-model="NovoProduto.codbarra"
        ></b-form-input>

        <br>
        <b-button type="submit" variant="primary">Cadastrar Produto</b-button>
      </b-form>
    </div>

  </div>
</template>

<script>

export default {
 name: "CadastraProduto",
 data() {
    return {
      NovoProduto: {
        nome: '',
        preco:  '',
        codbarra:   ''
      }
    }
  },
 methods: {
   cadastraproduto() {
   let payload = this.$http.post('/cadastraproduto', this.NovoProduto)
  .then(response => {
    console.log(response);
    console.log(payload.data);
  })
  .catch(error => {
    console.log(error);
  });
  },
 },
};
</script>

<style>
#form {
        max-width: 400px;
        margin: auto;
    }
</style>