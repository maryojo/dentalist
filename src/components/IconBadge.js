import React from 'react'

const IconBadge = ({icon, isDarkVersion}) => {
  return (
    <div className={`${isDarkVersion ? 'bg-[#583FBC33] border-[#583FBC]' : 'bg-[#FFFFFF33] border-white'} rounded-[0.8rem] border-[1.2px] p-[5px] w-fit h-fit`}>
      <div  className={`${isDarkVersion ? 'bg-[#583FBC] text-white' : 'bg-white text-[#583FBC]'} h-8 w-8 rounded-[0.7rem] flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  )
}

export default IconBadge