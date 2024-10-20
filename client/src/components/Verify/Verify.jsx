// import React, { useState } from 'react';
// import './Verify.css'

// const Verify = () => {
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     setCode(e.target.value);
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (code.length !== 6) {
//       setError('Please enter a 6-digit code.');
//       return;
//     }

//     // Mock verification process, replace with your logic
//     if (code === '123456') {
//       setSuccess(true);
//       setError('');
//     } else {
//       setError('Invalid verification code.');
//     }
//   };

//   const handleResendCode = () => {
//     // Mock resend code function, replace with your logic
//     alert('Verification code resent!');
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
//         <h1 className="text-2xl font-semibold mb-4 text-center">Verify Your Account</h1>
//         {success ? (
//           <div className="text-center">
//             <p className="text-green-500 mb-4">Your account has been successfully verified!</p>
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//               onClick={() => window.location.href = '/dashboard'} // Redirect after verification
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <label className="block mb-2 text-gray-700">Enter Verification Code</label>
//             <input
//               type="text"
//               value={code}
//               onChange={handleInputChange}
//               className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               maxLength="6"
//               placeholder="6-digit code"
//             />
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
//             >
//               Verify Code
//             </button>
//           </form>
//         )}

//         <div className="text-center mt-4">
//           <p>Didn't receive the code?</p>
//           <button
//             className="text-blue-500 hover:underline mt-2"
//             onClick={handleResendCode}
//           >
//             Resend Code
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Verify;


import React, { useState } from 'react';
import './Verify.css';

const Verify = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [certificateData, setCertificateData] = useState(null);

  const handleInputChange = (e) => {
    setCode(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError('Please enter a 6-digit code.');
      return;
    }

    try {
      // Send the verification code to the backend
      const response = await fetch(`http://localhost:5000/verify-code/${code}`);
      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setCertificateData(data); // Save the certificate data to display
      } else {
        setError(data.message || 'Invalid verification code.');
      }
    } catch (err) {
      setError('Error verifying the code.');
    }
  };

  const handleResendCode = () => {
    // Mock resend code function, replace with your logic
    alert('Verification code resent!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Verify Your Account</h1>
        {success ? (
          <div className="text-center">
            <p className="text-green-500 mb-4">Your account has been successfully verified!</p>
            {certificateData && (
              <div className="text-left">
                <p><strong>Certificate ID:</strong> {certificateData.certificateId}</p>
                <p><strong>Name:</strong> {certificateData.name}</p>
                <p><strong>Domain:</strong> {certificateData.domain}</p>
                <p><strong>Duration:</strong> {certificateData.duration}</p>
                <p><strong>Date of Joining:</strong> {new Date(certificateData.dateOfJoining).toLocaleDateString()}</p>
              </div>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
              onClick={() => window.location.href = '/dashboard'} // Redirect after verification
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-700">Enter Verification Code</label>
            <input
              type="text"
              value={code}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength="6"
              placeholder="6-digit code"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
            >
              Verify Code
            </button>
          </form>
        )}

        <div className="text-center mt-4">
          <p>Didn't receive the code?</p>
          <button
            className="text-blue-500 hover:underline mt-2"
            onClick={handleResendCode}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
