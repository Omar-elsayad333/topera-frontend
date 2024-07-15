'use client'

import React, { useRef, useEffect } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { UnityInstance } from 'react-unity-webgl/declarations/unity-instance'
interface IUnityComponentProps {
  setUnityInstance: (unityInstance: UnityInstance) => void
}

const UnityComponent = ({ setUnityInstance }: IUnityComponentProps) => {
  const unityContext = useUnityContext({
    loaderUrl: 'Build/toperamodel.loader.js',
    dataUrl: 'Build/toperamodel.data',
    frameworkUrl: 'Build/toperamodel.framework.js',
    codeUrl: 'Build/toperamodel.wasm',
  })

  const { unityProvider, loadingProgression, isLoaded, UNSAFE__unityInstance } = unityContext
  const unityRef = useRef<UnityInstance | null>(null)

  useEffect(() => {
    if (isLoaded && UNSAFE__unityInstance) {
      unityRef.current = UNSAFE__unityInstance
      setUnityInstance(unityRef.current)
    }
  }, [isLoaded, UNSAFE__unityInstance])

  // Example style object
  const unityStyle: React.CSSProperties = {
    width: '100%', // Example CSS property
    height: '100%', // Example CSS property
  }

  return (
    <div style={{ height: '100%' }}>
      {!isLoaded && <p>Loading... ({Math.round(loadingProgression * 100)}%)</p>}
      <Unity unityProvider={unityProvider} style={unityStyle} />
    </div>
  )
}

export default UnityComponent
