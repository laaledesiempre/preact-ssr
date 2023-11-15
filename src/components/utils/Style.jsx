import {h, Fragment} from 'preact'

export const Style = (props) => {
  return (
    <link rel="stylesheet" href={"./"+props.name} />
  )
}
