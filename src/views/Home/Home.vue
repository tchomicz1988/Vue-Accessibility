<script setup lang="ts">
</script>

<template>
  <div class="Home-topBanner">
    <section class="Home-topBannerOverlay">
      <h1>Travel Insurance</h1>
      <p class="Home-topBannerText">It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        Many desktop publishing </p>
      <button class="Home-topBannerButton"
              aria-label="Order now travel insurance">Order now
      </button>
    </section>
  </div>

  <section class="Home-section"
           aria-label="Insurance for International Visitors">
    <img class="Home-sectionImage"
         alt=""
         src="https://picsum.photos/id/866/600/300"/>
    <div class="Home-sectionContent">
      <h2>Insurance for International Visitors</h2>
      <p>It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.</p>
      <ul>
        <li>List item #1</li>
        <li>List item #2</li>
        <li>List item #3</li>
      </ul>
    </div>
  </section>

  <section class="Home-section"
           aria-label="Safe travel">
    <div class="Home-sectionContent">
      <h2>Safe travel</h2>
      <p>It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.</p>
    </div>
    <img class="Home-sectionImage"
         alt=""
         src="https://picsum.photos/id/566/600/300"/>
  </section>

  <section class="Home-section Home-section--articles"
           aria-label="Explore Our Travel Topics">
    <h2>Explore Our Travel Topics</h2>

    <div class="Home-articles">
      <router-link class="Home-article"
                   to="renting"
                   aria-label="Go to article: Renting Vacation Homes">
        <img alt="Mountain"
             src="https://picsum.photos/id/866/200/300"/>
        <span>Renting Vacation Homes</span>
      </router-link>

      <router-link class="Home-article"
                   to="renting"
                   aria-label="Go to article: Trends & Predictions">
        <img alt="Mountain"
             src="https://picsum.photos/id/866/200/300"/>
        <span>Trends & Predictions</span>
      </router-link>

      <router-link class="Home-article"
                   to="renting"
                   aria-label="Go to article: Popular Travel Destinations for 2021">
        <img alt="Mountain"
             src="https://picsum.photos/id/866/200/300"/>
        <span>Popular Travel Destinations for 2021</span>
      </router-link>
      <router-link class="Home-article"
                   to="renting"
                   aria-label="Go to article: Travel Gear for Safe Travels in 2021">
        <img alt="Mountain"
             src="https://picsum.photos/id/866/200/300"/>
        <span>Travel Gear for Safe Travels in 2021</span>
      </router-link>
    </div>

  </section>

  <div class="Home-section Home-section--cite">
    <cite>"The Story of my Life"</cite> <span class="acc-hide"> by </span>
    <span>
      <img src="https://picsum.photos/id/1027/50/50"
           alt="Donald Duck, CEO of Disney"
           aria-hidden="true">
    Donald Duck, CEO of Disney
  </span>
  </div>
  <section class="Home-section Home-section--contact"
           aria-label="Contact us">
    <div>
      <h2>Are you looking for an insurance?</h2>
      <span>Contact us to order now</span>
    </div>


    <div>
      <button aria-label="Call us to order insurance">Call Us</button>
      <button aria-label="Send a Message to get more information or order insurance">Send a Message</button>
    </div>

  </section>

</template>

<style scoped lang="scss">
@use "@/assets/_mixin.scss";

.Home-topBanner {
  background-image: url("https://picsum.photos/id/166/1900/600?blur=2");
  background-size: cover;
  background-position: center;
  padding: 300px 40px 40px;
  width: 100%;
  position: relative;
}

.Home-topBannerText {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.Home-topBannerOverlay {
  background: #fff;
  width: 80%;
  text-align: center;
  margin: auto;
  padding: 2rem;
  max-width: 1200px;

}

.Home-section {
  display: flex;
  font-size: 20px;
  max-width: 1200px;
  margin: 80px auto;
}

.Home-section--articles {
  flex-direction: column;
  flex: auto;

  h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
  }
}

.Home-article {
  text-align: center;

  img {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

}

.Home-articles {
  display: grid;
  grid-template-columns: 1fr  1fr  1fr  1fr;
  grid-gap: 44px;

  a{
    color: var(--color-black);
    border-bottom: 4px solid transparent;
     &:hover{
       border-color: var(--color-orange);
     }
  }
}

.Home-sectionContent {
  padding: 4rem;
}

.Home-sectionImage {
  max-width: 50%;
  object-fit: cover;
}

.Home-section--cite{
  padding: 100px 40px;
  background: var(  --color-gray-light);
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  cite{
    font-size: 2em;
  }
  img{
    display: block;
    margin: 20px auto;
    border-radius: 50%;
  }

}
.Home-section--contact{
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  button{
    margin-right: 40px;
  }

}

</style>
