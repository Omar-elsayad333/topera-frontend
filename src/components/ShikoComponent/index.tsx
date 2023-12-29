'use client'

import { useEffect, useState } from 'react'

const ShikoComponent = ({ data }: any) => {
  let [data2, setData2] = useState<any>(null)
  useEffect(() => {
    setData2(data2)
    console.log('oamr')
  }, [])

  //   useEffect(() => {
  //     console.log('ahmed')
  //   }, [data])

  const testF = () => {
    console.log('omar2')
    setData2([{ title: 'omar', id: 1 }])
  }

  return (
    <div>
      {data2?.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
      <button onClick={() => testF()}>test</button>
    </div>
  )
}

export default ShikoComponent
