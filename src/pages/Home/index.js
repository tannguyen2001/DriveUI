import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import PDFPreviewDemo from '../../components/PDFViewer/PDFViewerDemo'

const cx = classNames.bind(styles)

function Home({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('history-container')}>
        <p className={cx('title')}>MỞ GẦN ĐÂY</p>
        <div className={cx('content')}>
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/test.pdf')} />
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/test.pdf')} />
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/test.pdf')} />
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/test.pdf')} />
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/test.pdf')} />
        </div>
      </div>
      <div className={cx('folder-container')}>
        <p className={cx('title')}>QUẢN LÝ TỆP TIN</p>
        <div className={cx('container')}>
          <ul className={cx('list-file')}>
            <li className={cx('file-item')}>
              <span>Tên file</span>
              <span>Loại</span>
              <span>Thời gian tạo</span>
            </li>
            {data.map((file, index) => (
              <li className={cx('file-item')} key={index}>
                <span>{file.fileName}</span>
                <span>{file.fileType}</span>
                <span>{new Date(file.createdAt).toLocaleDateString('en-GB')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
