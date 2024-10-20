// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTrash } from 'react-icons/fa'; 

// const Dashboard = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [showData, setShowData] = useState(false);
//   const [certificateId, setCertificateId] = useState('');
//   const [name, setName] = useState('');
//   const [domain, setDomain] = useState('');
//   const [duration, setDuration] = useState('');
//   const [dateOfJoining, setDateOfJoining] = useState('');
//   const [certificates, setCertificates] = useState([]);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   // Fetch data function
//   const fetchCertificates = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/show-data');
//       setCertificates(response.data);
//     } catch (err) {
//       console.error('Error fetching certificates:', err);
//     }
//   };

//   // Handle form submission
//   const handleAddData = async () => {
//     try {
//       await axios.post('http://localhost:5000/add-data', {
//         certificateId,
//         name,
//         domain,
//         duration,
//         dateOfJoining,
//       });
//       setFormSubmitted(true);
  
//       // Clear input fields
//       setCertificateId('');
//       setName('');
//       setDomain('');
//       setDuration('');
//       setDateOfJoining('');
  
//       setTimeout(() => {
//         setFormSubmitted(false);
//         setShowForm(false);
//         setShowData(true);
//         fetchCertificates(); // Refresh the data after adding a new certificate
//       }, 2000);
//     } catch (err) {
//       console.error('Error adding certificate:', err);
//     }
//   };
  

//   // Handle delete certificate
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/delete-data/${id}`);
//       fetchCertificates(); // Refresh the data after deletion
//     } catch (err) {
//       console.error('Error deleting certificate:', err);
//     }
//   };

//   useEffect(() => {
//     if (showData) {
//       fetchCertificates();
//     }
//   }, [showData]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {!showForm && !showData && (
//         <div className="grid grid-cols-2 gap-8">
//           <div
//             className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
//             onClick={() => setShowForm(true)}
//           >
//             <h2 className="text-xl font-semibold">Add Data</h2>
//           </div>
//           <div
//             className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
//             onClick={() => setShowData(true)}
//           >
//             <h2 className="text-xl font-semibold">Show Data</h2>
//           </div>
//         </div>
//       )}

//       {showForm && (
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl mb-4">Add Certificate</h2>
//           <input
//             className="mb-4 p-2 border rounded w-full"
//             placeholder="Certificate ID"
//             value={certificateId}
//             onChange={(e) => setCertificateId(e.target.value)}
//           />
//           <input
//             className="mb-4 p-2 border rounded w-full"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             className="mb-4 p-2 border rounded w-full"
//             placeholder="Domain"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           />
//           <input
//             className="mb-4 p-2 border rounded w-full"
//             placeholder="Duration"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             className="mb-4 p-2 border rounded w-full"
//             placeholder="Date of Joining"
//             type="date"
//             value={dateOfJoining}
//             onChange={(e) => setDateOfJoining(e.target.value)}
//           />
//           <button
//             onClick={handleAddData}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Submit
//           </button>
//           <br />
//           <button
//             onClick={() => setShowForm(false)}
//             className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       )}

//       {formSubmitted && <div className="text-green-500 mt-4">Form Submitted Successfully!</div>}

//       {showData && (
//         <div className="bg-white p-8 rounded-lg shadow-md w-full">
//           <h2 className="text-2xl mb-4">Certificate Data</h2>
//           {certificates.length > 0 ? (
//             <ul>
//               {certificates.map((cert) => (
//                 <li key={cert._id} className="border-b py-2 flex justify-between items-center">
//                   <span>{cert.name} - {cert.certificateId}</span>
//                   <button
//                     onClick={() => handleDelete(cert._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No certificates added yet.</p>
//           )}
//           <button
//             onClick={() => setShowData(false)}
//             className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import { FaTrash ,FaEdit} from 'react-icons/fa'; 


const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showData, setShowData] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [duration, setDuration] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // To track editing state
  const [editCertificateId, setEditCertificateId] = useState(null); // Store ID for editing

  // Fetch data function
  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/show-data');
      setCertificates(response.data);
    } catch (err) {
      console.error('Error fetching certificates:', err);
    }
  };

  // Handle adding or updating certificate
  const handleAddData = async () => {
    try {
      if (isEditing) {
        // Update certificate if in editing mode
        await axios.put(`http://localhost:5000/update-data/${editCertificateId}`, {
          certificateId,
          name,
          domain,
          duration,
          dateOfJoining,
        });
      } else {
        // Add new certificate
        await axios.post('http://localhost:5000/add-data', {
          certificateId,
          name,
          domain,
          duration,
          dateOfJoining,
        });
      }

      // Clear input fields
      setCertificateId('');
      setName('');
      setDomain('');
      setDuration('');
      setDateOfJoining('');

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setShowForm(false);
        setShowData(true);
        fetchCertificates(); // Refresh the data after adding/updating a certificate
        setIsEditing(false); // Reset editing state
        setEditCertificateId(null); // Clear edit certificate ID
      }, 2000);
    } catch (err) {
      console.error('Error adding/updating certificate:', err);
    }
  };

  // Handle editing a certificate
  const handleEdit = (certificate) => {
    setCertificateId(certificate.certificateId);
    setName(certificate.name);
    setDomain(certificate.domain);
    setDuration(certificate.duration);
    setDateOfJoining(certificate.dateOfJoining);
    setIsEditing(true);
    setEditCertificateId(certificate._id);
    setShowForm(true); // Show form for editing
  };

  // Handle deleting a certificate
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-data/${id}`);
      fetchCertificates(); // Refresh the data after deleting a certificate
    } catch (err) {
      console.error('Error deleting certificate:', err);
    }
  };

  useEffect(() => {
    if (showData) {
      fetchCertificates();
    }
  }, [showData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!showForm && !showData && (
        <div className="grid grid-cols-2 gap-8">
          <div
            className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
            onClick={() => setShowForm(true)}
          >
            <h2 className="text-xl font-semibold">Add Data</h2>
          </div>
          <div
            className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
            onClick={() => setShowData(true)}
          >
            <h2 className="text-xl font-semibold">Show Data</h2>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">{isEditing ? 'Edit Certificate' : 'Add Certificate'}</h2>
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Date of Joining"
            type="date"
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
          <button
            onClick={handleAddData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update' : 'Submit'}
          </button>
          <br />
          <button
            onClick={() => {
              setShowForm(false);
              setIsEditing(false); // Reset editing state if cancelled
            }}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
          >
            Back to Dashboard
          </button>
        </div>
      )}

      {formSubmitted && <div className="text-green-500 mt-4">Form Submitted Successfully!</div>}

      {showData && (
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl mb-4">Certificate Data</h2>
          {certificates.length > 0 ? (
            <ul>
              {certificates.map((cert) => (
                <li key={cert._id} className="border-b py-2 flex justify-between items-center">
                  <div>
                    {cert.name} - {cert.certificateId}
                  </div>
                  <div>
                    <button
                      onClick={() => handleEdit(cert)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                    >
                      <FaEdit/>
                    </button>
                    <button
                      onClick={() => handleDelete(cert._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      <FaTrash/>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No certificates added yet.</p>
          )}
          <button
            onClick={() => setShowData(false)}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
