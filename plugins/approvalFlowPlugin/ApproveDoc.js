// In ApproveDoc.js
import React from 'react';
import PendingApprovals from '../../src/components/PendingApprovals'; // Adjust the path as necessary
import AddReviewer from '../../src/components/AddReviewer';


export default function ApproveDoc() {
  return (
    <div>
      <h1>Document Approval</h1>
      <PendingApprovals /> {/* Render the pending approvals component */}
      <AddReviewer />
    </div>
  );
}
