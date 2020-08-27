<template>
  <div class="advantage">
    <h3 class="advantage__title" v-html="title"></h3>
    
    <div class="advantage__content">
      <img v-if="!!image" :src="image" class="advantage__image" alt="">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.advantage {
  margin-top: 32px;
  padding-top: 23px;
  border-top: 1px solid #D9D9D6;
  
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #092433;
    margin-bottom: 24px;
  }
  &__image {
    height: 48px;
  }
  &__content {
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 15px;
    ul {
      li {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 125%;
        color: #092433;
        padding-left: 20px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 12px;
          height: 1px;
          background: #092433;
          left: 0;
          top: 8px;
        }
        & + li {
          margin-top: 10px;
        }
      }
    }
  }
}

</style>