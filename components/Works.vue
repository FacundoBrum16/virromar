
<template>
  
    <div class="pt-12 text-center pb-12 bg-blue-50 shadow-inner">
        <h1 class="text-4xl font-bold">Trabajos</h1>
        <h2 class="font-bold mt-3 text-blue-800 uppercase">Revisa nuestros ultimos proyectos</h2>
        <div class="w-10/12 mt-12 h-min mx-auto grid grid-cols-3">
            <div v-for="(work,index) in works" :key="index">
                <Work class="mb-5" :title="work.title" :description="work.description" :tag="work.tag" :photo="work.photo"/>
            </div>
        </div>
        <p v-if="!works.length" class="font-medium uppercase text-2xl mt-10 pb-10 text-gray-300">No se han añadido trabajos</p>
  </div>
</template>

<script>
export default {

    data(){
        return{
            works : []
        }
    },
  async fetch () {
    this.works = await this.$content('works').fetch()
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
