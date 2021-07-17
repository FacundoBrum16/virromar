<template> 
<div class="font-body">
  <!-- NAVBAR MOBILE  -->
  <div class="w-10/12 mx-auto flex items-center justify-between" v-if="mobileView"> 
    <div class="flex">
      <img class="h-14 mt-3 mr-5" src="../static/assets/virromarLogo.png" alt="Virromar logo"/>
    </div>      
  </div>
  <!-- NAVBAR ESCRITORIO  -->
  <Navegation v-if="!mobileView"/>
  <PageContent/>
  <!-- FOOTER  -->
  <Footer/>
</div>
</template>


<script>



  export default {
    data: () => {
      return {
        mobileView: false,
        desktopView:false,
        showNav: false
      };
    },
    metaInfo: {
      title: 'Virromar'
    },
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 990;
        this.desktopView = window.innerWidth >= 900;
      }
    },
    created() {
      this.handleView();
      window.addEventListener('resize', this.handleView);
    },



  }
</script>

