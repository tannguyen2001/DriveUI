import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Header() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logoInfoPlus} alt='logo' className={cx('logo')} />
        <div className={cx('search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
          <input
            type='text'
            className={cx('search-input')}
            placeholder='Tìm kiếm'
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <div onClick={() => setSearchInput('')}>
            <FontAwesomeIcon icon={faCircleXmark} className={cx('icon-clear')} />
          </div>
        </div>
        <div className={cx('tools')}>
          <img src={images.setting} alt='setting' className={cx('icon-setting')} />
          <img src={images.user} alt='user' className={cx('icon-user')} />
        </div>
      </div>
    </header>
  )
}

export default Header
