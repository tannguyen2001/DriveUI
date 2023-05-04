import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import PDFPreviewDemo from '../../components/PDFViewer/PDFViewerDemo'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FormDelete from '../../components/FormDelete'
import axios from 'axios'

const cx = classNames.bind(styles)

function Home({ data, deleteFile }) {
  const [showDelete, setShowDelete] = useState(false)
  const [fileDelete, setFileDelete] = useState({})

  const hanlderDeleteFile = (id) => {
    setShowDelete(false)
    deleteFile(id)
  }

  const handlerDownload = (id) => {
    axios({
      url: 'https://localhost:7268/api/File/' + id,
      method: 'GET',
      responseType: 'blob',
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'file.xlsx')
        document.body.appendChild(link)
        link.click()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('history-container')}>
        <p className={cx('title')}>MỞ GẦN ĐÂY</p>
        <div className={cx('content')}>
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/file1.pdf')}>
            Mẫu Bảng đánh giá kết quả phỏng vấn
          </PDFPreviewDemo>
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/file2.pdf')}>Mẫu đơn xin nghỉ phép</PDFPreviewDemo>
          <PDFPreviewDemo fileUrl={require('../../assets/filePDFs/file3.pdf')}>
            Mẫu phiếu đề xuất nhân sự
          </PDFPreviewDemo>
        </div>
      </div>
      <div className={cx('folder-container')}>
        <p className={cx('title')}>QUẢN LÝ TỆP TIN</p>
        <div className={cx('container')}>
          <ul className={cx('list-file')}>
            <li className={cx('file-item')}>
              <span>Tên file</span>
              <span></span>
              <span>Thời gian tạo</span>
              <span></span>
            </li>
            {data.map((file, index) => (
              <li onClick={() => handlerDownload(file.id)} className={cx('file-item')} key={index}>
                <span>{file.fileName}</span>
                <span>{file.fileType}</span>
                <span>{new Date(file.createdAt).toLocaleDateString('en-GB')}</span>
                <span
                  onClick={(event) => {
                    event.stopPropagation()
                    setFileDelete(file)
                    setShowDelete(true)
                  }}
                >
                  <FontAwesomeIcon className={cx('delete')} color='red' icon={faXmark} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showDelete && (
        <FormDelete
          onCoClick={async () => {
            hanlderDeleteFile(fileDelete.id)
          }}
          onKhongClick={() => {
            setShowDelete(false)
          }}
        >
          {fileDelete.fileName}
        </FormDelete>
      )}
    </div>
  )
}

export default Home
