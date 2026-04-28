import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './app/router/router'
import { Provider } from 'react-redux'
import { store } from './app/provider/store'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster />
    <RouterProvider router={router} />
  </Provider>
)
