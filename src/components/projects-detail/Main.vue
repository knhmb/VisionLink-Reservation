<template>
  <h3>
    (Title) 精美裝修設計項目 – 香港某地區綜合裝修方案, 為您的生活創造獨特的美感
  </h3>
  <Slide />
  <p>
    (Content)
    我們為香港某地區的一處住宅提供了一項精美的裝修設計方案。該項目涵蓋了房屋內外的所有細節，從地板和牆壁的材料選擇到家具和裝飾品的佈置，以及照明和空氣淨化系統的設計。
    我們的設計團隊與業主密切合作，充分考慮了他們的需求和偏好，打造了一個舒適、實用、美觀的居住空間。我們的綜合裝修方案包括了詳細的設計圖紙、材料清單、工程進度和質量保證，確保項目按時按質完成。我們的專業團隊在施工過程中嚴格遵守安全和環保標準，同時也保證了施工現場的整潔和秩序。
    該項目得到了業主的高度評價和認可，成為了我們精美裝修設計方案的經典案例之一。
  </p>
</template>

<script>
import Slide from "./Slide.vue";

export default {
  components: {
    Slide,
  },
};
</script>

<style scoped>
h3 {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary-contrast);
}

p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--ion-text-color-primary);
}
</style>