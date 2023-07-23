import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { size } from 'assets/icons/size';
import {
  faCircleUser,
  faClock,
  faArrowRotateRight,
  faCheck,
  faArrowUpRightFromSquare,
  faCartShopping,
  faBasketShopping,
  faBell,
  faMagnifyingGlass,
  faSearch,
  faTimes,
  faBars,
  faChevronDown,
  faBatteryFull,
  faDollarSign,
  faMemory
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
  faGithub,
  faTwitter,
  faCircleUser,
  faClock,
  faArrowRotateRight,
  faCheck,
  faArrowUpRightFromSquare,
  faCartShopping,
  faBasketShopping,
  faBell,
  faMagnifyingGlass,
  faSearch,
  faTimes,
  faBars,
  faChevronDown,
  faBatteryFull,
  faDollarSign,
  faMemory,
  size
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome', FontAwesomeIcon);
});
