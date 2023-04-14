import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import filePDFs from '../../assets/filePDFs'
import PDFPreviewDemo from '../../components/PDFViewer/PDFViewerDemo'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('history-container')}>
        <p className={cx('title')}>MỞ GẦN ĐÂY</p>
        <div className={cx('content')}></div>
      </div>
      <div className={cx('folder-container')}>
        <PDFPreviewDemo fileUrl={filePDFs.test} />
      </div>
    </div>
  )
}

export default Home
