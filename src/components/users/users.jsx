import React from 'react';

const Users = () => {
  const users = [
    { rank: 1, name: 'Saad Durani', points: 200, bgClass: 'light-green', initial: 'S' },
    { rank: 2, name: 'Aqib Raza', points: 180, bgClass: 'light-blue', initial: 'A' },
    { rank: 3, name: 'John Smith', points: 160, bgClass: 'light-purple', initial: 'J' },
    { rank: 4, name: 'Mary Johnson', points: 150, bgClass: 'grayShade2', initial: 'M' },
    { rank: 5, name: 'Rachel Lee', points: 140, bgClass: 'grayShade2', initial: 'R' },
    { rank: 6, name: 'Chris Brown', points: 120, bgClass: 'grayShade2', initial: 'C' },
    { rank: 7, name: 'David Rogriguez', points: 110, bgClass: 'grayShade2', initial: 'D' },
    { rank: 8, name: 'Bella Martinez', points: 100, bgClass: 'grayShade2', initial: 'B' },
    { rank: 9, name: 'Laura White', points: 90, bgClass: 'grayShade2', initial: 'L' },
    { rank: 10, name: 'Sam Willson', points: 80, bgClass: 'grayShade2', initial: 'S' },


  ];

  return (
    <div className="mt-5 shadow rounded bg-white p-4">
      <h1 className="font-semibold">Most Active Users</h1>
      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-start gap-2 mt-4">
          <div className="flex items-center gap-3">
            <p>{user.rank}</p>
            <div
              className={`${user.bgClass} w-[40px] h-[40px] flex justify-center items-center rounded-[50%]`}
            >
              <h2>{user.initial}</h2>
            </div>
            <div className="flex flex-col">
              <h3>{user.name}</h3>
              <p className="para-sm">{user.points} Points</p>
            </div>
          </div>
        <div className="h-[.3px] w-full my-3 px-2 grayBg "></div>

        </div>
        
      ))}
    </div>
  );
};

export default Users;
