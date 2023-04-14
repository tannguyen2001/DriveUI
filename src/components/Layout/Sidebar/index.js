import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Button className={cx('btn-new')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Mới
      </Button>
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
    </aside>
  )
}

export default Sidebar
