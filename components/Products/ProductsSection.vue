<template>
  <section class="products-section section">
    <div class="container">
      <h2 class="section__title" v-html="products.title"></h2>
      <p class="section__desc" v-html="products.subtitle"></p>

      <div class="products-grid">
        <ProductsItem
          v-for="product in products.items"
          :key="product.id"
          :title="product.title"
          :description="product.description"
          :link="product.link"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductsItem from './ProductsItem';
export default {
  name: 'ProductsSection',
  components: {
    ProductsItem
  },
  computed: {
    products() {
      return this.$store.getters['content/products'];
    }
  }
}
</script>

<style lang="scss">
.products-section {
  background: rgba(217, 217, 214, 0.3);
  padding: 48px 0 80px;
  .section__title, .section__desc {
    text-align: center;
  }
}
.products-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  row-gap: 16px;
  max-width: 824px;
  margin: 32px auto 0;
}
@media only screen and (max-width: 1200px) {
  .products-grid {
    grid-template-columns: 100%;
    row-gap: 8px;
  }
  .products-section {
    padding-bottom: 64px;
  }
}
</style>