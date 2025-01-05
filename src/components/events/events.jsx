import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import calender from "../../assets/images/calender.webp"

const Events = () => {
  const events = [
    {
      month: 'Sep',
      date: '11',
      title: 'Business Communication class 2',
      description: 'Join us for an engaging seminar on mastering business communication.',
    },
    {
      month: 'Dec',
      date: '06',
      title: 'Business Communication class 3',
      description:
        'Join us for an engaging seminar on mastering business communication. Learn how to enhance...',
    },
  ];

  return (
    <div className="mt-5 shadow rounded bg-white p-4">
      <div className="flex items-center ">
        <h1 className="font-semibold">Upcoming Events</h1>
      <img src={calender} alt="calender" className='w-[60px] h-[60px]' />
      </div>
      <div className='h-[300px] overflow-auto'>
          {events.map((event, index) => (
            <div key={index} className="border-1 border-[#F9F9F9] p-4 rounded shadow bg-white flex items-start justify-between mt-3">
              {/* Date of event */}
              <div className="flex flex-col items-center shadow rounded w-[17%] sm:w-[8%]  xl:w-[15%]">
                <div className="text-white greenbg w-full rounded-t-lg text-center">
                  <p className="para-sm font-semibold uppercase">{event.month}</p>
                </div>
                <div>
                  <p className="font-semibold py-2">{event.date}</p>
                </div>
              </div>
              {/* Event Details */}
              <div className="flex flex-col gap-1 items-start w-[80%]">
                <h3>{event.title}</h3>
                <p className="para-sm">{event.description}</p>
                <button className="primary-btn">Register</button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <div className="h-[1px] w-full my-3 px-2 grayBg "></div>
        <dv className="flex justify-center items-center">
            <p className="para-sm font-semibold green text-center">
                View All
            </p>
            <Icon icon="weui:arrow-outlined" width="16px" height="16px" className='green' />
        </dv>
      </div>
    </div>
  );
};

export default Events;
