import React from 'react'

interface IBadgeProps {
  count: number;
}

const Badge = ({count}: IBadgeProps) => {
  return (
    <>
      <div className="absolute flex items-center justify-center h-4 px-1 leading-[0] aspect-square bg-red text-white text-[0.9vw] font-medium rounded-full top-0 left-2/4">
        {count}
      </div>
    </>
  )
}

export default Badge