import React from 'react'

const NewsCatagory = ({ catagory = 'Health', backgroundColor = 'red', color = 'white', className=''}) => {
    return (
        <div className={className}>
            <p style={{ backgroundColor, color }} className='w-fit py-1 px-2 text-sm font-bold'>{catagory[0].toUpperCase() + catagory.substring(1)}</p>
            <div className='w-0 h-0 border-b-transparent border-r-transparent border-[5px] mt-[-3px]' style={{ borderTop: `5px solid ${backgroundColor}`, borderLeft: `5px solid ${backgroundColor}` }}></div>
        </div>
    )
}

export default NewsCatagory
