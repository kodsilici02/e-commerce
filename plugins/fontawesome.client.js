import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, config } from '@fortawesome/fontawesome-svg-core';
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
  faCircle,
  faXmark,
  faCreditCard,
  faEnvelope,
  faPhone,
  faChevronLeft,
  faChevronRight
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
  faChevronLeft,
  faChevronRight,
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
  faCalendarDays,
  faLocationDot,
  faMap,
  faCircle,
  faXmark,
  faCreditCard,
  faEnvelope,
  faPhone
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome', FontAwesomeIcon);
});
