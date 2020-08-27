<template>
  <section class="advantages-section section">
    <div class="container">
      <div class="advantages-grid">
        <div></div>
        <div>
          <h2 class="section__title" v-html="advantages.title"></h2>
          <p class="section__desc" v-html="advantages.subtitle"></p>

          <AdvantagesItem
            v-for="item in advantages.items"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :content="item.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdvantagesItem from './AdvantagesItem';
export default {
  components: {
    AdvantagesItem
  },
  computed: {
    advantages() {
      return this.$store.getters['content/advantages'];
    }
  }
}
</script>

<style lang="scss">
.advantages-grid {
  display: grid;
  grid-template-columns: 30% 60%;
  column-gap: 20px;
}
.advantages-section {
  padding-bottom: 96px;
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
  .advantages-section {
    padding-bottom: 64px;
  }
  .advantages-grid {
    grid-template-columns: 100%;
    row-gap: 30px;
  }
}
</style>