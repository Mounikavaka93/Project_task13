import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import SignUp from './pages/SignUp'
import Button from './components/ui/Button'

function NotFound() {
  return (
    <section className="section-space">
      <div className="container-page max-w-lg text-center">
        <p className="font-display text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-3 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button to="/" className="mt-6">
          Back to home
        </Button>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
