import React, { useState } from 'react';

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
    <div className='w-[50%] bg-[#e6e6fa] rounded-xl px-5 py-2 mb-4 mx-auto cursor-pointer transition ease-out duration-500'>
      <div onClick={() => setIsVisible(!isVisible)} className='flex justify-between'>
        <div className='text-2xl font-semibold'>{question}</div>
        {isVisible ? <div className='text-3xl'>-</div> : <div className='text-2xl'>+</div>}
      </div>
      <div className='w-[88%] text-2xl'>{isVisible && <p>{answer}</p>}</div>
    </div>
  );
};

const Accordion = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  return (
    <div className='my-28'>
        <div className='w-[80px] mx-auto'>
            <h1 className='text-6xl font-bold mb-16'>FAQ</h1>
            <div className=''></div>
        </div>
      
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
  );
};

export default Accordion;
