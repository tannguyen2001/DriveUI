import classNames from 'classnames/bind'
import styles from './FormDelete.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function FormDelete({ children, onCoClick, onKhongClick }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('content-top')}>
          <FontAwesomeIcon icon={faQuestion} className={cx('icon')} />
          <span className={cx('title')}>Bạn có chắc chắn muốn xoá tệp tin {children} không?</span>
        </div>
        <div className={cx('content-bottom')}>
          <span onClick={onCoClick} className={cx('co')}>
            Có
          </span>
          <span onClick={onKhongClick} className={cx('khong')}>
            Không
          </span>
        </div>
      </div>
    </div>
  )
}

export default FormDelete
