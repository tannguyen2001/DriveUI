import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import styles from './PDFViewerDemo.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function PDFViewerDemo(props) {
  return (
    <div className={cx('wrapper')}>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js'>
        <Viewer
          fileUrl={props.fileUrl}
          defaultScale={0.8}
          navigation={{ zoom: false, search: false, rotation: false, download: false }}
        />
      </Worker>
    </div>
  )
}

export default PDFViewerDemo
