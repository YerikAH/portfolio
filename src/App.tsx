// context
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import Blog from './components/pages/Blog'
import Certificate from './components/pages/Certificate'
import Home from './components/pages/Home'
import ProjectPage from './components/pages/ProjectPage'

// context
import { DataProvider } from './context/dataContext'
import { ThemeProvider } from './context/themeContext'

// enum
import { Sections } from './enum/LanguageEnum'

// blog
import BlogTwoStr from './components/pages/blog/blogs/blog_2/BlogTwoStr'
import BlogOneStr from './components/pages/blog/blogs/blog_1/BlogOneStr'
import BlogThreeStr from './components/pages/blog/blogs/blog_3/BlogThreeStr'

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
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/blog' element={<Blog section={section} handleChange={handleChange} />}>
              <Route path='1' element={<BlogOneStr />} />
              <Route path='2' element={<BlogTwoStr />} />
              <Route path='3' element={<BlogThreeStr />} />
            </Route>
          </Routes>
        </>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
