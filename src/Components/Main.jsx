import React from 'react'
import ImageList from './ImageList'
import CalltoAction from './CalltoAction'
import Review from './Review'
import Vision from './Vision'
import UserReview from './UserReview'
import Plan from './Plan'

const Main = () => {
  return (
    <div>
      <ImageList />
      <CalltoAction/>
      <Review/>
      <Vision/>
      <UserReview/>
      <Plan/>
    </div>
  )
}

export default Main