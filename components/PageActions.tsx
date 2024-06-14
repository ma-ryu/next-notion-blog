import * as React from 'react'
import { useEffect, useState } from 'react'

import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet'
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline'
import { IoHeartSharp } from '@react-icons/all-files/io5/IoHeartSharp'

import * as config from '@/lib/config'

import styles from './styles.module.css'

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */
export const PageActions: React.FC<{ title: string }> = ({ title }) => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const [url, setUrl] = useState<string>(config.host)

  useEffect(() => {
    if (typeof location !== 'undefined') setUrl(location.href)
  }, [])

  return (
    <div className={styles.pageActions}>
      <a
        className={styles.likeTweet}
        title='Like this article'
        onClick={() => setIsLike(!isLike)}
      >
        {!isLike ? <IoHeartOutline /> : <IoHeartSharp />}
      </a>

      <a
        className={styles.retweet}
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target='_blank'
        rel='noopener noreferrer'
        title='Share on Twitter'
      >
        <AiOutlineRetweet />
      </a>
    </div>
  )
}
