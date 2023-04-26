import styles from './FormUploads.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

const cx = classNames.bind(styles)

function FormUpLoads({ handleClickNewFile, isShow }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-form')}>
        <div className={cx('new-item')}>
          <FontAwesomeIcon icon={faFolderPlus} className={cx('icon')} />
          <span>Thư mục mới</span>
        </div>
        <div className={cx('new-item')} onClick={handleClickNewFile}>
          <FontAwesomeIcon icon={faFileCirclePlus} className={cx('icon')} />
          <span>Tải tệp lên</span>
        </div>
        <div className={cx('new-item')}>
          <FontAwesomeIcon icon={faFolder} className={cx('icon')} />
          <span>Tải thư mục lên</span>
        </div>
      </div>
    </div>
  )
}

export default FormUpLoads
