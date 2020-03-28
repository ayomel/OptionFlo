import React, {PureComponent} from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faTrophy,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons'

import DASHBOARD_IMAGE from '../images/dashboard-flow.png'

import styles from './LandingPage.module.css'

export default class LandingPage extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <div className={styles.bg_color}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <h2 className={styles.h2}>
                  Most Affordable Real Time Option Flow
                </h2>
                <h5 className={styles.h5}>
                  Track and monitor smart money activity in real time
                </h5>
                <Link
                  className={cx(styles.btn, styles.margin_tb_16)}
                  to="/subscription"
                >
                  Start 7 Days Free Trial
                </Link>
                <span className={styles.span}>
                  Then $59.99 per month. Auto renews
                </span>
              </div>
              <img className={styles.img} src={DASHBOARD_IMAGE}></img>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.bg_color}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <h2 className={styles.h2}>UNCOVER THE POWER OF OPTIONS FLOW</h2>
              </div>
              <div className={styles.fa_icons}>
                <div className={styles.fa_icon_containers}>
                  <FontAwesomeIcon
                    style={{color: '#6DB65B'}}
                    size="6x"
                    icon={faLightbulb}
                  />
                  <span className={styles.font_span}>
                    Understanding order flow
                  </span>
                  <p className={styles.font_p}>
                    Nail down the fundamentals and get familiar with all the
                    terminologies that are used.
                  </p>
                  <a className={cx(styles.button, styles.margin_top_24)} href>
                    Learn More
                  </a>
                </div>
                <div className={styles.fa_icon_containers}>
                  <FontAwesomeIcon
                    style={{color: '#6DB65B'}}
                    size="6x"
                    icon={faTrophy}
                  />
                  <span className={styles.font_span}>Money flow spotlight</span>
                  <p className={styles.font_p}>
                    Each month we highlight important smart money action. Read
                    our most recent case study.
                  </p>
                  <a className={cx(styles.button, styles.margin_top_24)} href>
                    Learn More
                  </a>
                </div>
                <div className={styles.fa_icon_containers}>
                  <FontAwesomeIcon
                    style={{color: '#6DB65B'}}
                    size="6x"
                    icon={faFileAlt}
                  />
                  <span className={styles.font_span}>Market knowledge</span>
                  <p className={styles.font_p}>
                    Some of our most active users help you understand some
                    insights into general market activity.
                  </p>
                  <a className={cx(styles.button, styles.margin_top_24)} href>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.bg_blue_color}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <h2 className={styles.h2}>
                  Made by retail traders for retail traders
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.bg_color}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <h2 className={styles.h2}>
                  Affordable real time option flow and option alerts from our
                  expert traders
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}