import Header from './Header'
import Sidebar from './Sidebar'
import classNames from 'classnames/bind'
import Home from '../../pages/Home'

import styles from './Layout.module.scss'
import axios from 'axios'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Layout() {
  const [dataFiles, setDataFiles] = useState([])

  const handlersearch = (e, keySearch) => {
    if (e.keyCode == 13) {
      axios
        .get('https://localhost:7268/api/File/search', {
          params: {
            key: keySearch,
          },
        })
        .then((res) => {
          setDataFiles(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className={cx('wrapper')}>
      <Header onKeyUp={handlersearch} />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          <Home data={dataFiles} />
        </div>
      </div>
    </div>
  )
}

export default Layout
