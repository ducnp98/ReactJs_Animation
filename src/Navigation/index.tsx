import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page from '../Page'
import BasicAnimation from '../Page/BasicAnimation'
import ButtonRippleAnimation from '../Page/ButtonRippleAnimation'
import InputAnimation from '../Page/InputAnimation'
import TabNavigationAnimation from '../Page/TabNavigationAnimation'
import ToggleButtonAnimation from '../Page/ToggleButtonAnimation'

function AppNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page} />
        <Route path="/BasicAnimation" Component={BasicAnimation} />
        <Route path="/InputAnimation" Component={InputAnimation} />
        <Route path="/ButtonRippleAnimation" Component={ButtonRippleAnimation} />
        <Route path="/TabNavigationAnimation" Component={TabNavigationAnimation} />
        <Route path="/ToggleButtonAnimation" Component={ToggleButtonAnimation} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigation
