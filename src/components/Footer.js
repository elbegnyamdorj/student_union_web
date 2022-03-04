import * as React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer has-background-grey-dark has-text-white-ter'>
        <div className='content has-text-centered has-background-grey-dark has-text-white-ter'>
          <div className='container has-background-grey-dark has-text-white-ter'>
            <div style={{ maxWidth: '100vw' }} className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Нүүр хуудас
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/holbogdoh'>
                        Тухай
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/aboutus'>
                        Бидний тухай
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      <Link className='navbar-item' to='/blog'>
                        Мэдээ мэдээлэл
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/contact'>
                        Холбогдох
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 social'>
                <a
                  title='facebook'
                  href='https://www.facebook.com/studentunionofUFE'
                >
                  <img
                    src={facebook}
                    alt='Facebook'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title='twitter' href='https://twitter.com'>
                  <img
                    className='fas fa-lg'
                    src={twitter}
                    alt='Twitter'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title='instagram'
                  href='https://www.instagram.com/student_union_of_ufe'
                >
                  <img
                    src={instagram}
                    alt='Instagram'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
