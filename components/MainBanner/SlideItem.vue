<template>
  <div class="slide">
    <h2 class="slide__title" v-html="title"></h2>
    <p class="slide__description" v-html="description"></p>
    <BtnPrimary
      v-if="!!btnContent"
      :text="btnContent.text"
      :link="btnContent.link"
      class="slide__btn"
    />
  </div>
</template>

<script>
import BtnPrimary from '@/components/BtnPrimary';

export default {
  name: 'SlideItem',
  components: { BtnPrimary },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    btnContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.slide {
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    line-height: 120%;
    color: #FFFFFF;
    margin-bottom: 2rem;
  }
  &__description {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2.0625rem;
    color: #FFFFFF;
    margin-bottom: 2rem;
  }
}
@media only screen and (max-width: 1200px) {
  .slide {
    &__title {
      font-size: 2.25rem;
      line-height: 120%;
      margin-bottom: 1rem;
    }
    &__description {
      font-size: 1.125rem;
      line-height: 1.5625rem;
    }
  }
}
</style>