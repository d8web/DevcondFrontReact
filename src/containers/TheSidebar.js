import React from 'react'
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavTitle,
  CSidebarNavItem,
} from '@coreui/react'


// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {

  return (
    <CSidebar>
      <h3 className="mb-4 mt-4 ml-auto mr-auto">Logo</h3>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
