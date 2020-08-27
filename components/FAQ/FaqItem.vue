<template>
  <div :class="[{ show }, 'faq-item']">
    <div @click="show = !show" class="faq-item__question">
      <span v-html="question"></span>
      <div class="faq-item__icon">
        <component :is="show ? 'MinusIcon' : 'PlusIcon'"/>
      </div>
    </div>
    <transition name="slide">
      <div v-if="show" class="faq-item__answer" v-html="answer"></div>
    </transition>
    
  </div>
</template>

<script>
import PlusIcon from '@/assets/images/icons/plus.svg';
import MinusIcon from '@/assets/images/icons/minus.svg';
export default {
  name: 'FaqItem',
  components: { PlusIcon, MinusIcon },
  props: {
    question: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style lang="scss">
.faq-item {
  padding-top: 24px; 
  border-top: 1px solid #D9D9D6;
  &.show {
    padding-bottom: 24px;
  }
  &__icon {
    display: inline-flex;
    align-items: center;
    height: 31px;
  }
  &__question {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 24px;
    cursor: pointer;
    span {
      display: block;
      max-width: calc(100% - 50px);
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 2rem;
      color: #092433;
    }
  }
}

.slide-enter-active {
   transition-duration: 0.3s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>