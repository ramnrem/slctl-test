<template>
  <component
    :is="!!link ? 'a' : 'div'"
    :href="link"
    class="product"
    target="_blank"
  >
    <h3 class="product__title" v-html="title"></h3>
    <p class="product__desc" v-html="description"></p>
  </component>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss">
.product {
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px;
  text-decoration: none;
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #092433;
    margin-bottom: 12px;
  }
  &__desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 125%;
    color: #092433;
  }
}
</style>