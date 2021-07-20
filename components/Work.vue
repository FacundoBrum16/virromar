<template>
    <div class="bg-white h-min md:flex text-left rounded-xl shadow-xl w-56 md:w-100 p-5">

        <div class="pb-5 relative">
            <h2 class="font-bold text-center md:text-left text-lg w-full md:text-xl mb-3 md:w-72">{{ title }}</h2>
            <p class="w-full text-center md:text-left md:w-64 mb-10 md:-mb-10">{{description}}</p>
            <div class="md:absolute md:bottom-0 md:left-0">
                <p class="uppercase mx-auto w-min md:mx-0 rounded-xl px-2 text-sm border-blue-800 font-semibold text-blue-800 bg-blue-50 border-2">{{ tag }}</p>
            </div>
        </div>
        
        <div @click="showModal = false" class="bg-black h-max bg-opacity-50 top-0 right-0 left-0 bottom-0 z-30 fixed" v-if="showModal">
        </div>
            <div class="bg-white p-2 shadow-xl text-center w-full sm:w-auto rounded-xl top-2/4 left-2/4 z-50 fixed" style="transform: translate(-50%, -50%)" v-if="showModal">
                
                <div class="flex justify-end">
                    <svg class="cursor-pointer" @click="showModal = false" width="15" height="15" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.2091 34.7445L18.615 24.1501L8.02091 34.7445C6.5523 36.2129 4.17143 36.2129 2.70282 34.7445C1.23448 33.2759 1.23448 30.895 2.70282 29.4264L13.2972 18.8323L2.70282 8.23819C1.23448 6.76959 1.23448 4.38872 2.70282 2.92011C4.17143 1.45176 6.5523 1.45176 8.02091 2.92011L18.615 13.5145L29.2091 2.92011C30.6777 1.45176 33.0586 1.45176 34.5272 2.92011C35.9956 4.38872 35.9956 6.76959 34.5272 8.23819L23.9328 18.8323L34.5272 29.4264C35.9956 30.895 35.9956 33.2759 34.5272 34.7445C33.0586 36.2129 30.6777 36.2129 29.2091 34.7445Z" fill="#E76E54"/>
                    </svg>
                </div>      



                <span class="text-lg md:text-2xl font-semibold">{{title}}</span>
                
                
                <div class="mt-2 shadow-md">
                    <img class="shadow-xl object-fit mx-auto" :src="photo" alt="Imagen de un proyecto de Virromar">
                </div>
            </div>
        

        
        <div class="flex mx-auto h-max w-full cursor-pointer h-48 md:w-44 md:h-44 shadow-md hover:shadow-xl">
            <img @click="showModal = true" class="h-full w-full object-cover" :src="photo" alt="Imagen de un proyecto de Virromar">
        </div>


        

    </div>
</template>


<script>
export default {
    data(){
        return{
            showModal: false,

        }
    },
    
    
    props: {
        title: String,
        description : String,
        tag: String,
        photo: String,
    },




}

</script>


