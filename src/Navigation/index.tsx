import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page from '../Page'
import BasicAnimation from '../Page/BasicAnimation'
import InputAnimation from '../Page/InputAnimation'

function AppNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page} />
        <Route path="/BasicAnimation" Component={BasicAnimation} />
        <Route path="/InputAnimation" Component={InputAnimation} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigation
