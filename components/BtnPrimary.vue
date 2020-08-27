<template>
  <a
    :href="link"
    v-html="text"
    :class="[{ bordered }, 'btn']"
  ></a>
</template>

<script>
export default {
  name: 'BtnPrimary',
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    bordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  height: 56px;
  padding: 0 2rem;
  background: #FFFFFF;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #092433;
  &.bordered {
    border: 1px solid #092433;
  }
}
</style>