<template> 
<div>
  <div v-for="(work,index) in works" :key="index">
    <Work :title="work.title" :description="work.description" :tag="work.tag" :photo="work.photo"/>
    {{ Works }}
  </div>
</div>
</template>

<script>
export default {
  async asyncData ({ $content }) {

    const works = await $content('works').fetch()

    return {
      works
    }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
