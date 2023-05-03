import Header from './Header'
import Sidebar from './Sidebar'
import classNames from 'classnames/bind'
import Home from '../../pages/Home'

import styles from './Layout.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Layout() {
  const [dataFiles, setDataFiles] = useState([])
  const getData = () => {
    axios
      .get('https://localhost:7268/api/File')
      .then((res) => {
        setDataFiles(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [])

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

  const hanlderDeleteFile = (id) => {
    axios
      .delete('https://localhost:7268/api/File', {
        params: {
          ID: id,
        },
      })
      .then(() => {
        alert('Bạn đã xoá file thành công!')
        axios
          .get('https://localhost:7268/api/File')
          .then((res) => {
            setDataFiles(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch(() => {
        alert('Xoá file thất bại!')
      })
  }

  return (
    <div className={cx('wrapper')}>
      <Header onKeyUp={handlersearch} />
      <div className={cx('container')}>
        <Sidebar getData={getData} />
        <div className={cx('content')}>
          <Home deleteFile={hanlderDeleteFile} data={dataFiles} />
        </div>
      </div>
    </div>
  )
}

export default Layout
