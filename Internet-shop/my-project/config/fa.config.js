import Vue from 'vue'
import fontawesome from '../node_modules/@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {
  faSpinner,
  faAngleLeft,
  faAngleRight
} from '../node_modules/@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faSpinner,
  faAngleLeft,
  faAngleRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
