import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'
import { getPageProperty } from 'notion-utils'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap, isBlogPost }) => {
  if (!block) {
    return null
  }

  // only display comments and page actions on blog post pages

  const title = getPageProperty('Name', block, recordMap) as string

  return (
    <>
      <PageSocial />
      <div style={{ marginTop: '10%' }}>
        {isBlogPost && title && <PageActions title={title} />}
      </div>
    </>
  )
}
