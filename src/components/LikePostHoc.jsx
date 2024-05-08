import React from 'react'
import WrapperHoc from './WrapperHoc'

const LikePostHoc = (props) => {
  return (
    <div>
        <button onClick={props.handleCount}>like post {props.count}</button>
    </div>
  )
}

export default WrapperHoc(LikePostHoc); 