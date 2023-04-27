<template>
    <div id="form">
      <br>
      <h2>Cadastro de Funcionários</h2>
      <div id="form">
        <b-form inline @submit="cadastrafuncionario">
  
          <label class="sr-only" for="input-nome">Nome do Funcionario</label>
          <b-form-input
            id="input-nome"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Digite aqui o Nome do Produto"
            v-model="NovoFuncionario.nome"
          ></b-form-input>
  
          <label class="sr-only" for="input-documento">CPF do Funcionário</label>
          <b-form-input
            id="input-documento"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Digite aqui o numero do documento do funcionário"
            v-model="NovoFuncionario.documento"
          ></b-form-input>

          <label class="sr-only" for="input-telefone">Telefone</label>
          <b-form-input
            id="input-telefone"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Digite aqui o telefone para contato"
            v-model="NovoFuncionario.telefone"
          ></b-form-input>

          <label class="sr-only" for="input-senha">Senha</label>
          <b-form-input
            id="input-senha"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Digite aqui a senha para acessar o login de Funcionário"
            v-model="NovoFuncionario.senha"
          ></b-form-input>

          <br>
          <b-button type="submit" variant="primary">Cadastrar Funcionário</b-button>
        </b-form>
      </div>
  
    </div>
  </template>
  
  <script>
  
  export default {
   name: "CadastraFuncionario",
   data() {
      return {
        NovoFuncionario: {
          nome: '',
          documento:  '',
          telefone:  '',
          senha:   ''
        }
      }
    },
   methods: {
     cadastrafuncionario() {
     let payload = this.$http.post('/cadastrafuncionario', this.NovoFuncionario)
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