import { registerModules } from './router/register-modules'

import about from './modules/about'
import card from './modules/card'
import checkOut from './modules/check-out'
import contact from './modules/contact'
import myAccount from './modules/my-account'
import selectAccount from './modules/select-account'
import signUp from './modules/sign-up'
import wishlists from './modules/wishlists'
import home from './modules/home'

registerModules({
  home: home,
  about: about,
  card: card,
  checkOut: checkOut,
  contact: contact,
  selectAccount: selectAccount,
  myAccount: myAccount,
  signUp: signUp,
  wishlists: wishlists
})
