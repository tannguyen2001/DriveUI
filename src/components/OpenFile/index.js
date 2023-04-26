import styles from './OpenFile.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function OpenFile() {
  return (
    <div className={cx('wrapper')}>
      <label>Chọn file cần tải lên</label>
      <input type='file' />
    </div>
  )
}

export default OpenFile
