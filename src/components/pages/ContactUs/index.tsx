'use client'
import { use, useEffect, useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import { IRoadmaps } from '@/app/[locale]/(main)/contact-us/page'
import useHandleError from '@/hooks/useHandleError'
import useContactUs from '@/container/contactUs/useContactUs'

import Button from '@mui/material/Button'

interface IProps {
  data: IRoadmaps
}

const ContactUsComponent = ({ data }: IProps) => {
  const { change, handleChange, loading, postData, test } = useContactUs()

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <button onClick={() => handleChange()}>{change}</button>
      <button className="" disabled={loading} onClick={test}>
        {loading ? 'loading...' : 'try post req'}
      </button>
      <Button variant="grayButton">Contained</Button>

      {postData}
    </div>
  )
}

export default ContactUsComponent
