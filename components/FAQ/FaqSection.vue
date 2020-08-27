<template>
  <section class="faq-section section">
    <div class="container">
      <div class="faq-section__content">
        <h2 class="section__title" v-html="faq.title"></h2>

        <FaqItem
          v-for="item in faq.items"
          :key="item.id"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  computed: {
    faq() {
      return this.$store.getters['content/faq'];
    }
  }
}
</script>

<style lang="scss">
.faq-section {
  padding: 100px 0;
  &__content {
    max-width: 824px;
    margin: 0 auto 0;
  }
}

@media only screen and (max-width: 1200px) {
  .faq-section {
    padding: 64px 0;
  }
}
</style>