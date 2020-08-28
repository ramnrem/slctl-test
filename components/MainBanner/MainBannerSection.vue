<template>
  <section class="main-banner-section">
    <div class="container">=
      <div class="swiper" v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in banners" :key="item.id">
            <SlideItem
              :title="item.title"
              :description="item.description"
              :btnContent="item.button"
            />
          </div>
        </div>

        <div class="swiper__button swiper__button_prev" slot="button-prev">
          <PrevIcon/>
        </div>
        <div class="swiper__pagination" slot="pagination"></div>
        <div class="swiper__button swiper__button_next" slot="button-next">
          <NextIcon/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlideItem from './SlideItem';
import PrevIcon from '@/assets/images/icons/prev.svg';
import NextIcon from '@/assets/images/icons/next.svg';

import 'swiper/swiper.scss';

export default {
  name: 'MainBannerSection',
  components: { PrevIcon, NextIcon, SlideItem },
  data: () => ({
    swiperOption: {
      pagination: {
        el: '.swiper__pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.swiper__button_next',
        prevEl: '.swiper__button_prev'
      }
    }
  }),
  computed: {
    banners() {
      return this.$store.getters['content/banners'];
    }
  }
}
</script>

<style lang="scss">
.main-banner-section {
  display: flex;
  align-items: center;
  background: url(~assets/images/main-banner.png) no-repeat center;
  background-size: cover;
  height: 620px;
  .container {
    height: 100%;
  }
}
.swiper {
  &-container {
    padding: 0 0 50px 0 !important;
    height: 100%;
  }
  &-slide {
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__button {
    display: inline-flex;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    bottom: 30px;
    &:focus {
      outline: none;
    }
    &_prev {
      left: calc(50% - 58px);
    }
    &_next {
      left: calc(50% + 36px);
    }
  }
  &__pagination {
    display: inline-flex;
    width: 100px;
    bottom: 37px;
    position: absolute;
    left: calc(50% - 50px);
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    color: #FFFFFF;
    z-index: 999;
    span {
      padding: 0 5px;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .main-banner-section {
    height: 400px;
  }
  .swiper {
    &-container {
      padding: 0 0 50px 0 !important;
    }
    
    &__button {
      bottom: 30px;
      &_prev {
        left: 16px;
      }
      &_next {
        left: unset;
        right: 16px;
      }
    }
  }
}
</style>