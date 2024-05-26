import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBars,
  faFilm,
  faHeart,
  faHome,
  faMoneyCheck,
  faUser,
  faSearch,
  faTrash,
  faArrowRight,
  faXmark,
  faNoteSticky,
  faHighlighter,
  faArrowLeft,
  faStar,
  faPenToSquare,
  faMusic,
  faPhotoFilm,
  faCar,
  faMessage,
  faFileAudio,
  faFile,
  faCheck,
  faList,
  faAngleDown,
  faX
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faUser,
  faBars,
  faHeart,
  faHome,
  faFilm,
  faMoneyCheck,
  faSearch,
  faTrash,
  faArrowRight,
  faXmark,
  faNoteSticky,
  faHighlighter,
  faArrowLeft,
  faStar,
  faPenToSquare,
  faMusic,
  faPhotoFilm,
  faCar,
  faMessage,
  faFileAudio,
  faFile,
  faCheck,
  faList,
  faAngleDown,
  faX
)

const app = createApp(App)
app.use(PerfectScrollbarPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Notifications)
app.use(createPinia())
app.use(router)

app.mount('#app')
