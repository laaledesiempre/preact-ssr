//Imports
import { hydrate } from 'preact'
import {h} from 'preact'
import {MainHydrate} from '../Main'

//Hydration code
hydrate(
  h(MainHydrate),
  document.body
)
// This code compiles into build/server/client.entry.js and cointains whole app code.
