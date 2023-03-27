import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div className="relative flex min-h-screen gap-8 p-4 sm:p-8">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="max-2-[1280px] mx-auto flex-1 max-sm:w-full sm:pr-5">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
