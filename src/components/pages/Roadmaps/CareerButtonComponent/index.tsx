'use client'

import Image from 'next/image'
import { CSSProperties, useState } from 'react'

// Assets
import RightArrow from '@/assets/icons/rightArrow.svg'
import GraduateIcon from '@/assets/icons/graduateIcon.svg'

// Components
import ArticleComponent from '@/components/pages/Roadmaps/ArticleComponent'

// MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CareerButtonComponent = ({ careerName, articalId }: { careerName: string; articalId: string }) => {
  const [drawerState, setDrawerState] = useState(false)

  const styles: Record<string, CSSProperties> = {
    buttonStyle: {
      padding: '14px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      width: '550px',
      maxWidth: '100%',
      borderRadius: '10px',
      border: `1px solid #00000066`,
    },
  }
  
  const handleDrawer = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <>
      <Button onClick={() => handleDrawer(true)} sx={styles.buttonStyle}>
        <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'flex-start'}>
          <Image width={30} height={30} alt={careerName} src={GraduateIcon} />
          <Typography color={'primary'} variant="h6">{`What is ${careerName}?`}</Typography>
        </Stack>
        <Image alt={careerName} src={RightArrow} />
      </Button>
      <ArticleComponent id={articalId} handleDrawer={handleDrawer} open={drawerState} />
    </>
  )
}

export default CareerButtonComponent
