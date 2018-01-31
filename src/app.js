import { h, app } from 'hyperapp'

import DoButton from './components/DoButton.jsx'

const state = {
  count : 0
}

const actions = {
  countUp : () => state => ++state.count,
  clear : () => state => { return {count : 0} }
}

const view = (state, actions) => (
  <div>
    hello! hyperapp
    current : {state.count}
    <DoButton
      name="countUp"
      onclick={actions.countUp}
    />
    <DoButton
      name="clear"
      onclick={actions.clear}
    />
  </div>
)

app(
  state,
  actions,
  view,
  document.getElementById('app')
)
