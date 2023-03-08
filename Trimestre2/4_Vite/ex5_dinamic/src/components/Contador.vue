<script>
export default {

    data() {
        return {

            contador: 0,
        }
    }, 
    methods: {
        aumentar() {
            this.contador=this.contador+1;

        }

    
    }


}

</script>

<template>

<button @click="aumentar">Contador: {{ contador }}</button>


</template>