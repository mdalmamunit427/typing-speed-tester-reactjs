import React from 'react'

import Hero from '../../components/Hero'
import WorkingTimeline from '../../components/WorkingTimeline'
import GetStartedBanner from '../../components/GetStartedBanner'

const Home = () => {
  return (
    <>
      <Hero/>
      <WorkingTimeline/>
      <GetStartedBanner/>
    </>
  )
}

export default Home