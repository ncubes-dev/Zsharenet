import React from 'react'
import Head from 'next/head'

export class PDFViewer extends React.Component {
  openPdfInNewTab = () => {
    const { src } = this.props
    if (navigator.onLine) {
      window.location.href = src
    } else {
      window.location.href = caches.match(src)
    }
  }

  render () {
    const { src } = this.props
    return (
      <div>
        <Head>
          <title>PDF Viewer</title>
        </Head>
        <p>
          <strong>Source:</strong> {src}
        </p>
        <iframe src={src} style={{ width: '100%', height: '100%' }}></iframe>
        <button onClick={this.openPdfInNewTab}>Open PDF</button>
      </div>
    )
  }
}
