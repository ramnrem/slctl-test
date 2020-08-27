<template>
  <section class="promo-section">
    <div class="container">
      <div class="promo-grid">
        <div class="promo-grid__cell">
          <div class="promo-grid__title" v-html="promoblock.title"></div>
        </div>
        <div class="promo-grid__cell">
          <div class="promo-grid__subtitle" v-html="promoblock.subtitle"></div>
          <BtnPrimary
            v-if="!!promoblock.button"
            :text="promoblock.button.text"
            :link="promoblock.button.link"
            bordered
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnPrimary from '@/components/BtnPrimary';
export default {
  name: 'Promo',
  components: { BtnPrimary },
  computed: {
    promoblock() {
      return this.$store.getters['content/promoblock'];
    }
  }
}
</script>

<style lang="scss">
.promo-section {
  padding: 42px 0 90px;
}
.promo-grid {
  display: grid;
  grid-template-columns: 30% 60%;
  column-gap: 20px;
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 1.75rem;
    line-height: 2.25rem;
    color: #092433;
  }
  &__subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 2rem;
    color: #092433;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 1200px) {
  .promo-grid {
    grid-template-columns: 100%;
    row-gap: 30px;
  }
}

</style>