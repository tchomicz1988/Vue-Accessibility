import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About.vue'
import ClaimReport from '../views/ClaimReport/ClaimReport.vue';
import UpsNotFound from '../views/UpsNotFound.vue';
import { RouterPaths } from '../types/routerPaths';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RouterPaths.home,
      name: 'home',
      component: Home,
      meta: {
        title: 'Insurance',
        metaTags: [
          {
            name: 'description',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing.'
          },
          {
            property: 'og:description',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing.'
          }
        ]
      }
    },
    {
      path: RouterPaths.about,
      name: 'about',
      component: About,
      meta: {
        title: 'About',
        metaTags: [
          {
            name: 'description',
            content: 'About us'
          },
          {
            property: 'og:description',
            content: 'About us'          }
        ]
      }
    },
    {
      path: RouterPaths.claimReport,
      name: 'claimReport',
      component: ClaimReport,
      meta: {
        title: 'Claim Report',
        metaTags: [
          {
            name: 'description',
            content: 'Claim Report'
          },
          {
            property: 'og:description',
            content: 'Claim Report'
          }
        ]
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: UpsNotFound,
      meta: {
        title: 'Ups Not Found',
        metaTags: [
          {
            name: 'description',
            content: 'Ups Not Found'
          },
          {
            property: 'og:description',
            content: 'Ups Not Found'
          }
        ]
      }
    }
  ]
})

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...

export default router
