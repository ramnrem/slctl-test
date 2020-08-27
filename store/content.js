export const state = () => ({
  hello: "world",
  banners: undefined,
  promoblock: undefined,
  advantages: undefined,
  products: undefined
});

export const actions = {
  async fetch({ commit }) {
    const data = await this.$axios.$get("https://selectel.ru/data/page.json");

    commit("setContent", data);
  }
};

export const mutations = {
  setContent(state, { banners, promoblock, advantages, products, faq }) {
    state.banners = banners;
    state.promoblock = promoblock;
    state.advantages = advantages;
    state.products = products;
    state.faq = faq;
  }
};

export const getters = {
  banners: s => s.banners,
  promoblock: s => s.promoblock,
  advantages: s => s.advantages,
  products: s => s.products,
  faq: s => s.faq
};
