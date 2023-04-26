import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import FormUpLoads from '../../FormUploads'
import axios from 'axios'

const cx = classNames.bind(styles)

function Sidebar() {
  const [isShowFormUploads, setIsShowFormUpLoads] = useState(false)

  const handlerClickNew = () => {
    setIsShowFormUpLoads(true)
  }

  const handleClickOutSide = () => {
    setIsShowFormUpLoads(false)
  }

  const useOutSideClick = (callback) => {
    const ref = useRef()
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback()
        }
      }
      document.addEventListener('click', handleClick, true)

      return () => {
        document.removeEventListener('click', handleClick, true)
      }
    }, [ref])

    return ref
  }

  const ref = useOutSideClick(handleClickOutSide)

  const handleClickNewFile = () => {
    inputFile.current.click()
  }

  const handleChangeFile = () => {
    axios
      .post('https://localhost:7268/api/File', {
        FileName: 'test6.pfd',
        FilePath: 'C:gg',
        UserID: 1,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const inputFile = useRef(null)

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('wrapper-new')}>
        <Button className={cx('btn-new')} onClick={handlerClickNew} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
          Mới
        </Button>
        <div onClick={handleClickOutSide} ref={ref} className={cx('form-uploads')}>
          {isShowFormUploads && <FormUpLoads handleClickNewFile={handleClickNewFile} />}
        </div>
      </div>
      <ul className={cx('sidebar-list')}>
        <li className={cx('sidebar-item')}>
          <Link>Tài liệu đến</Link>
        </li>
        <li className={cx('sidebar-item')}>
          <Link>Tài liệu phát hành</Link>
        </li>
        <li className={cx('sidebar-item')}>
          <Link>Biểu mẫu</Link>
        </li>
        <li className={cx('sidebar-item')}>
          <Link>Thư mục lưu trữ</Link>
        </li>
        <li className={cx('sidebar-item')}>
          <Link>Thống kê báo cáo</Link>
        </li>
        <li className={cx('sidebar-item')}>
          <Link>Thùng rác</Link>
        </li>
      </ul>
      <input onChange={handleChangeFile} type='file' ref={inputFile} style={{ display: 'none' }} />
    </aside>
  )
}

export default Sidebar
