import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Car.js').Car[]} cars from the sandbox API*/
  cars: [],

  /** @type {import('./models/House.js').House[]} Houses from the sandbox API*/
  houses: []
})

