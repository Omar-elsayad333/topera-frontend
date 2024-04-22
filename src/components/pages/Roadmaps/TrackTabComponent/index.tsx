'use client'
import { useState } from 'react'

// Types
import { ITrack } from '@/types/pages/roadmaps'

// Component
import TrackButtonComponent from '../TrackButtonComponent'
import FrameworksCardComponent from '../FrameworksCardComponent'

// MUI
import Stack from '@mui/material/Stack'

const TrackTabComponent = ({ data }: { data: ITrack[] }) => {
  const [selectedTab, setSelectedTab] = useState<ITrack>(data[0])

  const handleSelectTab = (selctedItem: ITrack) => {
    setSelectedTab(selctedItem)
  }

  return (
    <Stack gap={'26px'}>
      <Stack
        gap={'26px'}
        direction={'row'}
        sx={{ py: 1, overflowX: { xs: 'auto', md: 'unset' }, flexWrap: { xs: 'noWrap', md: 'wrap' } }}
      >
        {data.map((item) => (
          <TrackButtonComponent
            key={item.id}
            selectedItem={item}
            selectTab={handleSelectTab}
            selected={selectedTab.id === item.id}
          />
        ))}
      </Stack>
      <FrameworksCardComponent selectedTab={selectedTab} />
    </Stack>
  )
}

export default TrackTabComponent
