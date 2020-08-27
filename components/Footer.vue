<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__cell">
          <a class="footer__logo" href="/">
            <LogoWhiteIcon/>
          </a>
        </div>
        <div class="footer__cell">
          <nav class="footer__nav">
            <ul>
              <li><a href="#">Серверы</a></li>
              <li><a href="#">Оборудование</a></li>
              <li><a href="#">Дата-центры</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Облако</a></li>
              <li><a href="#">Решения</a></li>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Офисы</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer__cell">
          <div class="footer__desc">
            <span>© ООО «Селектел», 2008—2020</span>
            <span>Лицензия на телематические <br/> услуги № 176266 и № 176267</span>
          </div>
        </div>
        <div class="footer__cell footer__cell_flex">
          <div class="footer__soc-links">
            <a href="#" target="_blank"><tgi/></a>
            <a href="#" target="_blank"><fbi/></a>
            <a href="#" target="_blank"><vki/></a>
            <a href="#" target="_blank"><twi/></a>
            <a href="#" target="_blank"><hi/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoWhiteIcon from '@/assets/images/icons/logo_white.svg';
import tgi from '@/assets/images/icons/tg.svg';
import fbi from '@/assets/images/icons/fb.svg';
import vki from '@/assets/images/icons/vk.svg';
import twi from '@/assets/images/icons/twitter.svg';
import hi from '@/assets/images/icons/h.svg';

export default {
  components: { LogoWhiteIcon, tgi, fbi, vki, twi, hi }
}
</script>

<style lang="scss">
.footer {
  background: #092433;
  padding: 80px 0;
  &__cell {
    &:nth-child(1) {
      grid-area: c1;
    }
    &:nth-child(2) {
      grid-area: c2;
    }
    &:nth-child(3) {
      grid-area: c3;
    }
    &:nth-child(4) {
      grid-area: c4;
    }
    &_flex {
      display: flex;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: 45% 55%;
    row-gap: 32px;
    grid-template-areas: "c1 c2" "c3 c4";
  }
  &__soc-links {
    display: flex;
    align-items: center;
    a {
      display: inline-flex;
      align-items: center;
      & + a {
        margin-left: 20px;
      }
    }
  }
  &__desc {
    span {
      display: block;
      max-width: 220px;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #FFFFFF;
      opacity: 0.5;
    }
  }
  &__nav {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      row-gap: 17px;
      a {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: #FFFFFF;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .footer {
    padding: 40px 0;
    &__grid {
      grid-template-columns: 100%;
      row-gap: 0;
      grid-template-areas: "c1" "c4" "c2" "c3";
    }
    &__cell {
      &:nth-child(1) {
        margin-bottom: 40px;
      }
      &:nth-child(4) {
        margin-bottom: 60px;
      }
      &:nth-child(2) {
        margin-bottom: 80px;
      }
    }
  }
}
</style>