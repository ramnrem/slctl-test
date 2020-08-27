<template>
  <main>
    <MainBannerSection/>
    <PromoSection/>
    <AdvantagesSection/>
    <ProductsSection/>
    <FaqSection/>
  </main>
</template>

<script>
import MainBannerSection from '@/components/MainBanner/MainBannerSection';
import PromoSection from '@/components/Promo';
import AdvantagesSection from '@/components/Advantages/AdvantagesSection';
import ProductsSection from '@/components/Products/ProductsSection';
import FaqSection from '@/components/FAQ/FaqSection';
export default {
  components: { MainBannerSection, PromoSection, AdvantagesSection, ProductsSection, FaqSection },
  async fetch({ store }) {
    await store.dispatch('content/fetch')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Manrope', sans-serif;
}
:root {
  font-size: 16px;
}
.container {
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
}

.section {
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 112%;
    color: #092433;
    margin-bottom: 16px;
  }
  &__desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 125%;
    color: #092433;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    padding: 0 16px;
  }
}
</style>
