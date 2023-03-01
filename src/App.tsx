// context
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import Blog from './components/pages/Blog'
import BlogOneStr from './components/pages/blog/blogs/blog_1/BlogOneStr'
import Certificate from './components/pages/Certificate'
import Home from './components/pages/Home'

// context
import { DataProvider } from './context/dataContext'
import { ThemeProvider } from './context/themeContext'

// enum
import { Sections } from './enum/LanguageEnum'

function App() {
  const [section, setSection] = useState<Sections>(Sections.home)
  function handleChange(section: Sections) {
    setSection(section)
  }
  return (
    <DataProvider>
      <ThemeProvider>
        <>
          <Routes>
            <Route path='/' element={<Home section={section} handleChange={handleChange} />} />
            <Route
              path='/certificate'
              element={<Certificate section={section} handleChange={handleChange} />}
            />
            <Route path='/blog' element={<Blog section={section} handleChange={handleChange} />}>
              <Route path=':1' element={<BlogOneStr />} />
            </Route>
          </Routes>
        </>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
