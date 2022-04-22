import Image from 'next/image'
import React, { useState } from 'react'

function cn(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function BlurImage({ src, width, height, addClass, layout }: any) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className={cn(
        `duration-300 ease-in-out ${addClass}`,
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoadingComplete={() => setLoading(false)}
      layout={layout ? layout : 'intrinsic'}
      objectFit="cover"
    />
  )
}

export default BlurImage
