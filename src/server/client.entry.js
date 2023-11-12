import { hydrate } from 'preact'
import {h} from 'preact'
import {Main} from '../pages/Main'
hydrate(
  h(Main),
  document.body
)
