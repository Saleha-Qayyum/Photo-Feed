import React from 'react'
import { Route, BrowserRouter as Router, Routes ,} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>  
          <Route path="/createpost" element={<CreatePost /> }/>
          <Route path="/feed" element={<Feed /> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App