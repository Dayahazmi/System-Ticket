import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('open');
  return (
    <div>
      <div className="flex flex-col text-left max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl font-bold ">My Tickets</h1>
        <p className='mt-2'>If you don't see your tickets, please call us</p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 p-5 border-solid border-2 border-gray-200 ">
        <div className="flex justify-between items-center">
          <div>
            <button
              className={`px-4 py-2 ${activeTab === 'open' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('open')}
            >
              Open Tickets
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'closed' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('closed')}
            >
              Closed Tickets
            </button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Create New Ticket
          </button>
        </div>

        <div className="mt-10 text-center">
          <img
            src="ticket.png"
            alt=""
            className="mx-auto"
          />
          <p className="text-gray-500 mt-4">You don't have any {activeTab === 'open' ? 'open' : 'closed'} tickets</p>

        </div>
      </div>
    </div>

  );
};

export default Home;
