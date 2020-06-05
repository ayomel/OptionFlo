import React from 'react'
import Carousel from '../../components/Carousel'

import {CUSTOMERS_FEEDBACK} from './community-data'

import styles from './OurCommunity.module.scss'

export default function OurCommunity() {
  const OUR_COMMUNITY = 'Our community'
  const CUSTOMER_CARDS = CUSTOMERS_FEEDBACK.map((data, i) => {
    return (
      <div key={i}>
        <div className={styles.user_comment}>{data.text}</div>
        <div className={styles.desktop_customer_name}>
          <span>- {data.name}</span>
        </div>
      </div>
    )
  })
  return (
    <div className={styles.community_container}>
      <div className={styles.community_inner_container}>
        <h3 className={styles.h3}>{OUR_COMMUNITY}</h3>
        <div className={styles.desktop_view}>
          <Carousel node={CUSTOMER_CARDS} />
        </div>
        <div className={styles.mobile_view}>
          {CUSTOMERS_FEEDBACK.map((data, i) => {
            return (
              <div className={styles.mobile_container} key={i}>
                <div className={styles.mobile_user_comment}>{data.text}</div>
                <div className={styles.mobile_customer_name}>
                  <span>- {data.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}