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
  faMemory,
  faFilter,
  faCompactDisc,
  faMicrochip,
  faBoltLightning,
  faCircleCheck,
  faStopwatch,
  faCamera,
  faCalendar,
  faCalendarDays,
  faLocation,
  faLocationDot,
  faMap,
  faCircle
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
  size,
  faFilter,
  faCompactDisc,
  faMicrochip,
  faBoltLightning,
  faCircleCheck,
  faStopwatch,
  faCamera,
  faCalendarDays,
  faLocationDot,
  faMap,
  faCircle
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome', FontAwesomeIcon);
});
