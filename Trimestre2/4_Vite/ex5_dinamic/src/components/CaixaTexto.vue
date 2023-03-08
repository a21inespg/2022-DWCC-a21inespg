<script>
    export default {
        data() {
            return {
                texto:"",
            
            }

        },
    }

</script>


<template>
    <div>O texto escrito: {{ texto }}</div>
    <textarea v-model="texto" placeholder="Escribe aquí...">

    
    </textarea>

</template>