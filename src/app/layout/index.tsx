import { Outlet } from "react-router"

export const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
