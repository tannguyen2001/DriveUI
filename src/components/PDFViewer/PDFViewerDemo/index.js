import React, { useState } from 'react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/open/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import styles from './PDFViewerDemo.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function PDFViewerDemo({ fileUrl, children }) {
  return (
    <div className={cx('wrapper-demo')}>
      {<p className={cx('title')}>{children}</p>}
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js'>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  )
}

export default PDFViewerDemo
