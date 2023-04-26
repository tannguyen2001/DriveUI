import Home from '../pages/Home'
import Login from '../pages/Login'
import PDFViewerDetail from '../components/PDFViewer/PDFViewerDetail'

// public router
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

//private router
const privateRoutes = []

export { publicRoutes, privateRoutes }
