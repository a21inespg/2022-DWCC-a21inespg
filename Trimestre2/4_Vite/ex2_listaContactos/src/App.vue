<script>
import Contacto from "./components/Contacto.vue";
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      persoas: [
        {
          id: 1,
          nome: "Inés",
          telf: 333333,
          email: "ines@mail.com",
          favorito: false,
        },
        {
          id: 2,
          nome: "Pedro",
          telf: 32344324,
          email: "pedro@mail.com",
          favorito: false,
        },
        {
          id: 3,
          nome: "Manuel",
          telf: 88888,
          email: "manu@mail.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    cambiarFavorito(id) {
      let persoa = this.persoas.find((p) => p.id == id);
      persoa.favorito = !persoa.favorito;
    },
    engadirNovoUsuario(nome, telefono, correo) {
      let lastId = this.persoas.length;
      this.persoas.push({
        id: lastId + 1,
        nome: nome,
        telf: parseInt(telefono),
        email: correo,
        favorito: false,
      });
    },

    eliminarUsuario(id) {
      let index = this.persoas.findIndex((p) => p.id == id);
      this.persoas.splice(index, index);
    },
  },
  components: {
    Contacto,
    Form,
  },
};
</script>

<template>
  <div v-for="p in persoas">
    <Contacto
      :id="p.id"
      :nome="p.nome"
      :telf="p.telf"
      :email="p.email"
      :favorito="p.favorito"
      @cambiar-f="cambiarFavorito"
      @eliminar="eliminarUsuario"
    ></Contacto>
    <br />
  </div>
  <Form @novo-usuario="engadirNovoUsuario"></Form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
