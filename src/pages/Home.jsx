import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const HomePage = () => {
  const { scheduleEvents } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="container mx-auto">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-800">Productivity Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your schedule, tasks, and time effectively</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/calendar" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800">Calendar</h2>
            <p className="text-gray-600 mt-2">View and manage your events</p>
          </Link>

          <Link to="/taskboard" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800">Task Board</h2>
            <p className="text-gray-600 mt-2">Organize your tasks and track their progress</p>
          </Link>

          <Link to="/timer" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800">Timer</h2>
            <p className="text-gray-600 mt-2">Keep track of your work time</p>
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Upcoming Events</h2>
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            {scheduleEvents.length === 0 ? (
              <p className="text-gray-600">No upcoming events</p>
            ) : (
              <ul>
                {scheduleEvents.slice(0, 5).map((event) => (
                  <li key={event.Id} className="border-b py-2">
                    <p className="text-gray-800">{event.Subject}</p>
                    <p className="text-gray-600 text-sm">{new Date(event.StartTime).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
