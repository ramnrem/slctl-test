<template>
  <header class="header">
    <div class="container">
      <a class="logo header__logo" href="https://selectel.ru/" target="_blank">
        <LogoIcon/>
      </a>
      <div class="header__links">
        <a href="tel:+78005550675" class="header__link">
          <span>8 800 555 06 75</span>
          <PhoneLinkIcon/>
        </a>
        <a href="mailto:sales@selectel.ru" class="header__link">
          <span>sales@selectel.ru</span>
          <MailLinkIcon/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/assets/images/icons/logo.svg';
import PhoneLinkIcon from '@/assets/images/icons/phone-link.svg';
import MailLinkIcon from '@/assets/images/icons/mail-link.svg';
export default {
  name: 'Header',
  components: { LogoIcon, PhoneLinkIcon, MailLinkIcon }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 88px;
  background: #F2F2F2;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__links {
    display: flex;
    align-items: center;
  }
  &__link {
    display: inline-flex;
    text-decoration: none;
    & + & {
      margin-left: 35px;
    }
    svg {
      display: none;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 1.5625rem;
      color: #000000;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .header {
    height: 64px;
    &__link {
      svg {
        display: inline-flex;
      }
      span {
        display: none;
      }
    }
  }
}
</style>