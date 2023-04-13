import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Mới</Button>
    </aside>
  )
}

export default Sidebar
