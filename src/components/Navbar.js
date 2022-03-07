import React from 'react'
import { Link } from 'gatsby'

import zurag from '../../static/img/reallogo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      { active: !this.state.active },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className='navbar is-transparent has-shadow is-fixed-top '
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container py-3 '>
          <div className='navbar-brand'>
            <Link
              to='/'
              className='navbar-item'
              title='Logo'
              style={{ padding: '0' }}
            >
              <img src={zurag} alt='holboo' style={{ width: '230px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              role='menuitem'
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={{ justifyContent: 'space-between' }}
          >
            <div className='navbar-start has-text-centered is-size-5'>
              <Link className='navbar-item' to='/'>
                Нүүр хуудас
              </Link>
              <Link className='navbar-item' to='/aboutus'>
                Бидний тухай
              </Link>
              <Link className='navbar-item' to='/club'>
                Клуб
              </Link>
              <Link className='navbar-item' to='/blog'>
                Мэдээ мэдээлэл
              </Link>
              <Link className='navbar-item' to='/contact'>
                Бидэнтэй хамт
              </Link>
              <Link className='navbar-item' to='/contact/examples'>
                Санал хүсэлт
              </Link>
              <Link className='navbar-item' to='/holbogdoh'>
                Холбогдох
              </Link>
            </div>
          </div>
          <div class='navbar-end'>
            <div class='navbar-item'></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
