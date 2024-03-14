import React, { useEffect, useState } from 'react';
import path from 'path';
import { loadData, writeData } from '@docusaurus/utils';

const contentPath = path.resolve(__dirname, '../../docs');

const ApprovalComponent = () => {
  const [pendingDocuments, setPendingDocuments] = useState([]);

  useEffect(() => {
    const fetchPendingDocuments = async () => {
      const contentFiles = await loadData(contentPath);
      const pendingDocuments = contentFiles.filter(
        (file) => file.object.approvalStatus === 'pending'
      );
      setPendingDocuments(pendingDocuments);
    };

    fetchPendingDocuments();
  }, []);

  const handleApprove = async (documentId) => {
    const updatedDocuments = pendingDocuments.map((doc) => {
      if (doc.id === documentId) {
        const updatedDoc = { ...doc.object, approvalStatus: 'approved' };
        writeData(`${contentPath}/${doc.object.contentPath}`, updatedDoc);
        return { ...doc, object: updatedDoc };
      }
      return doc;
    });

    setPendingDocuments(updatedDocuments.filter((doc) => doc.object.approvalStatus === 'pending'));
  };

  const handleReject = async (documentId) => {
    const updatedDocuments = pendingDocuments.map((doc) => {
      if (doc.id === documentId) {
        const updatedDoc = { ...doc.object, approvalStatus: 'rejected' };
        writeData(`${contentPath}/${doc.object.contentPath}`, updatedDoc);
        return { ...doc, object: updatedDoc };
      }
      return doc;
    });

    setPendingDocuments(updatedDocuments.filter((doc) => doc.object.approvalStatus === 'pending'));
  };

  return (
    <div>
      <h2>Pending Documents for Approval</h2>
      <ul>
        {pendingDocuments.map((document) => (
          <li key={document.id}>
            {document.object.contentPath}
            <button onClick={() => handleApprove(document.id)}>Approve</button>
            <button onClick={() => handleReject(document.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovalComponent;