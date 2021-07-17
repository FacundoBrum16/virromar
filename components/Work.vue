<template>
    <div class="bg-white h-min md:flex text-left rounded-xl shadow-xl w-56 md:w-100 p-5">

        <div class="pb-5 relative">
            <h2 class="font-bold text-center md:text-left text-lg w-full md:text-xl mb-3 md:w-80">{{ title }}</h2>
            <p class="w-full text-center md:text-left md:w-72 mb-10 md:-mb-10">{{description}}</p>
            <div class="md:absolute md:bottom-0 md:left-0">
                <p class="uppercase mx-auto w-min md:mx-0 rounded-xl px-2 text-sm border-blue-800 font-semibold text-blue-800 bg-blue-50 border-2">{{ tag }}</p>
            </div>
        </div>
        
        <div class="flex mx-auto w-full h-48 md:w-44 md:h-44">
           <img class="shadow-md" :src="photo" alt="Imagen de un proyecto de Virromar">
        </div>
    </div>
</template>


<script>
export default {
  props: {
      title: String,
      description : String,
      tag: String,
      photo: String,

  }
}

</script>
