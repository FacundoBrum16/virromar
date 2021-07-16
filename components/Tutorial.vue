<template>
    <div class="bg-white h-min flex text-left justify-between rounded-xl shadow-xl w-100 p-5">

        <div class="w-84 relative">
            <h2 class="font-bold text-2xl mb-3">{{ title }}</h2>
            <p>{{description}}</p>
            <div class="absolute bottom-0 left-0">
                <p class="uppercase w-min rounded-xl px-2 text-sm border-blue-800 font-semibold text-blue-800 bg-blue-50 border-2">Cuarzo</p>
            </div>
        </div>
        
        <div class="bg-red-400 w-60 h-60">
           
        </div>
    </div>
</template>


<script>



export default {
  
  data(){
     return {
         title: "sdfdf"
     }
  },
  props: {
      title: String,
      description : String,
  }
}

</script>
