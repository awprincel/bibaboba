import { Outlet } from "react-router"
import { Header } from "../../shared/ui/header"

export const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
