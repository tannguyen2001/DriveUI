import React, { useState } from 'react'
import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import classNames from 'classnames/bind'

import styles from './PDFViewerDetail.module.scss'
const cx = classNames.bind(styles)

function PDFViewerDetail(props) {
  const { fileUrl } = props
  const [defaultScale] = useState(SpecialZoomLevel.PageFit)

  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <div className={cx('wrapper')}>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js'>
        <Viewer fileUrl={fileUrl} defaultScale={defaultScale} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  )
}

export default PDFViewerDetail
