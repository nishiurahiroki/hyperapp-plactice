import {h} from 'hyperapp'

const DoButton = props => (
  <button
    onclick={props.onclick}
  >
    {props.name}
  </button>
)

export default DoButton
