import React from 'react'
import { MainSlides } from 'src/features/MainSlides'
import { bigLorem } from 'src/proccess/lorem'
import { PageLayout } from 'src/shared/Layout'
import { ContentLayout } from 'src/theme/components'

const Main = () => {
  return (
    <PageLayout>
      <MainSlides />
      <ContentLayout color="#fff">
        {bigLorem}
        {bigLorem}
        {bigLorem}
        {bigLorem}
        {bigLorem}
      </ContentLayout>
    </PageLayout>
  )
}

export default Main
