import { hydrate } from 'preact'
import {h} from 'preact'
import {MainHydrate} from '../Main'
hydrate(
  h(MainHydrate),
  document.body
)
