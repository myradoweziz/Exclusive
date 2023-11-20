import { registerModules } from './router/register-modules'

import about from './modules/about'
import card from './modules/card'
import check from './modules/check'
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
  check: check,
  contact: contact,
  selectAccount: selectAccount,
  myAccount: myAccount,
  signUp: signUp,
  wishlists: wishlists
})
