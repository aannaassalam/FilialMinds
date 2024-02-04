import React, { useState } from 'react'


const data = [
    {
      key: 1,
      title: 'Question 1 ?',
      data: `Answer 1.`,
      isOpen: false,
    },
    {
      key: 2,
      title: 'Question 2 ?',
      data: `Answer 2 `,
      isOpen: false,
    },
    {
      key: 3,
      title: 'Question 3 ?',
      data: `Answer 3 `,
      isOpen: false,
    },
  ];

  const Section = ({ question, answer, isVisible, setIsVisible }) => {
    return (
        <>
            <div className='w-[70%] bg-[#e6e6fa] px-5 py-2  mx-auto cursor-pointer transition ease-out duration-500'>
        <div onClick={() => setIsVisible(!isVisible)} className='flex justify-between'>
          <div className='text-2xl font-semibold'>{question}</div>
          {isVisible ? <div className='text-3xl'>-</div> : <div className='text-2xl'>+</div>}
        </div>
        <div className='w-[88%] text-2xl'>{isVisible && <p>{answer}</p>}</div>
        
      </div>
      <div className='w-[70%] mx-auto h-[1px] bg-slate-700'></div>
      </>
      
    );
  };


const HomeAccordion = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    return (
      <div className='my-28'>
          <p className='text-5xl text-purple-700 font-bold italic text-center tracking-[6px]'>FAQ</p>
          <svg width="140" height="75" viewBox="0 0 418 52" fill="none"  className="mx-auto -mt-6 mb-8" xmlns="http://www.w3.org/2000/svg">
<path d="M50.1585 1.06906C55.1575 2.29104 60.3231 3.06856 65.1 4.84599C75.5424 8.67857 85.6515 13.3999 94.5387 20.1208C108.258 30.6187 124.477 34.2293 140.807 37.5064C146.862 38.7284 152.638 37.4508 157.749 34.0626C162.081 31.2298 166.302 28.2303 170.468 25.1198C175.19 21.5649 179.744 17.7325 184.466 14.1777C196.074 5.4016 209.461 1.56902 223.68 0.291487C232.012 -0.486138 239.788 2.01326 247.287 5.45704C255.341 9.17853 263.339 13.0667 271.449 16.6216C281.335 20.8985 291.611 23.7868 302.442 24.62C308.941 25.1199 314.773 24.1757 320.383 20.5097C333.436 12.0114 348.211 8.78983 363.375 6.95685C371.262 6.01259 378.927 7.34545 386.426 9.51169C394.258 11.7335 401.979 14.3442 409.588 17.1214C412.254 18.1212 414.698 19.8988 416.976 21.6762C418.642 23.0093 418.087 26.2309 416.309 27.5084C413.143 29.8413 409.533 30.5076 405.756 29.5634C400.368 28.2859 394.869 27.2307 389.703 25.2866C368.763 17.3993 348.989 21.1761 329.77 30.952C326.827 32.4517 324.049 34.3403 320.994 35.7845C315.162 38.5617 308.997 39.3394 302.609 38.6173C290 37.2843 277.781 34.5625 266.227 29.3413C259.506 26.2863 252.563 23.5646 246.176 19.8987C229.012 10.0117 212.627 13.511 196.63 22.3426C191.52 25.1753 187.076 29.3411 182.299 32.8405C176.634 37.0063 171.079 41.2834 165.191 45.1715C156.804 50.7815 147.473 52.5034 137.586 50.5038C119.367 46.7823 101.593 42.1165 86.5957 30.1188C78.7639 23.8423 69.4881 19.8986 60.3232 15.9549C51.436 12.1223 42.9932 13.1223 34.8281 17.7325C24.9967 23.2869 16.8872 30.7298 10.8884 40.339C11.555 44.5048 8.22222 45.0605 5.55607 46.0603C2.55666 47.1712 0.112719 45.1714 0.723711 42.2831C1.11252 40.5056 1.55688 38.6727 2.39005 37.0063C9.49977 23.1201 19.5533 12.067 33.8283 5.29051C38.9939 2.95763 44.2708 1.40233 50.1585 1.06906Z" fill="yellow"/>
</svg>
          
        
        {data.map((section) => (
          <Section
            key={section.key}
            question={section.title}
            answer={section.data}
            isVisible={visibleSection === section.key}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === section.key ? null : section.key
              )
            }
          />
        ))}
      </div>
    )
}

export default HomeAccordion
