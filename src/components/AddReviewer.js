import React, { useState } from 'react';

const reviewers = [
  { id: 1, name: 'Jane Doe' },
  { id: 2, name: 'John Smith' },
  { id: 3, name: 'Alice Johnson' },
];

export default function AddReviewer() {
  const [selectedReviewer, setSelectedReviewer] = useState('');
  const [addedReviewers, setAddedReviewers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedReviewer) {
      setAddedReviewers([...addedReviewers, selectedReviewer]);
      setSelectedReviewer(''); // Reset dropdown if needed
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <div>
          <label htmlFor="reviewer" className="block text-sm font-medium text-gray-700">Select Reviewer</label>
          <select
            id="reviewer"
            name="reviewer"
            value={selectedReviewer}
            onChange={(e) => setSelectedReviewer(e.target.value)}
            className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose a reviewer</option>
            {reviewers.map((reviewer) => (
              <option key={reviewer.id} value={reviewer.name}>
                {reviewer.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Reviewer
        </button>
      </form>
      <div>
        {addedReviewers.map((reviewer, index) => (
          <span key={index} className="ml-4 text-sm font-medium text-gray-900">{reviewer}</span>
        ))}
      </div>
    </div>
  );
}
