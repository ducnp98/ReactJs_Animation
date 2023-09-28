import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page from '../Page'
import BasicAnimation from '../Page/BasicAnimation'

function AppNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page} />
        <Route path="/BasicAnimation" Component={BasicAnimation} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigation
