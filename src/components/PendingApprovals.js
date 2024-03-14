

import React from 'react';

function EyeIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function ApproveDoc() {
  return (
    <div className="py-6">
      <div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Documentation</h1>
          <p className="text-gray-500">Here are the documentation files awaiting approval.</p>
        </div>
        <div className="border">
          <div className="p-0">
            <table>
              <thead>
                <tr>
                  <th className="w-[100px]">File</th>
                  <th>Version</th>
                  <th>Author</th>
                  <th>Modified</th>
                  <th className="w-[120px]" />
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td className="font-medium">Getting Started.md</td>
                  <td>1.0.0</td>
                  <td>John Doe</td>
                  <td>2 hours ago</td>
                  <td className="flex gap-2 justify-end">
                    <a href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-900">
                      <EyeIcon className="h-4 w-4" />
                      View
                    </a>
                    <button className="h-7 px-3 text-sm">Approve</button>
                    <button className="h-7 px-3 text-sm border">Reject</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
