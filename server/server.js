const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// App initialization
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/certificates')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Certificate schema
const certificateSchema = new mongoose.Schema({
    certificateId: String,
    name: String,
    domain: String,
    duration: String,
    dateOfJoining: Date
});

const Certificate = mongoose.model('Certificate', certificateSchema);

// Route to add certificate data (No authentication)
app.post('/add-data', async (req, res) => {
    try {
        const { certificateId, name, domain, duration, dateOfJoining } = req.body;
        const newCertificate = new Certificate({ certificateId, name, domain, duration, dateOfJoining });
        await newCertificate.save();
        return res.json({ message: 'Certificate added successfully!' });
    } catch (err) {
        return res.status(500).json({ message: 'Error adding certificate', error: err });
    }
});

// Route to show all certificate data
app.get('/show-data', async (req, res) => {
    try {
        const certificates = await Certificate.find();
        return res.json(certificates);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching certificates', error: err });
    }
});
// Route to delete certificate data
app.delete('/delete-data/:id', async (req, res) => {
    try {
        const certificateId = req.params.id;
        await Certificate.findByIdAndDelete(certificateId);
        return res.json({ message: 'Certificate deleted successfully!' });
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting certificate', error: err });
    }
});
// Update certificate data route
app.put('/update-data/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { certificateId, name, domain, duration, dateOfJoining } = req.body;
      const updatedCertificate = await Certificate.findByIdAndUpdate(
        id,
        { certificateId, name, domain, duration, dateOfJoining },
        { new: true }
      );
      return res.json({ message: 'Certificate updated successfully!', updatedCertificate });
    } catch (err) {
      return res.status(500).json({ message: 'Error updating certificate', error: err });
    }
  });
  
// Route to verify the certificate code
app.get('/verify-code/:code', async (req, res) => {
    try {
        const certificateId = req.params.code;
        const certificate = await Certificate.findOne({ certificateId });

        if (certificate) {
            return res.json(certificate); // Return the certificate data if found
        } else {
            return res.status(404).json({ message: 'Invalid verification code.' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Error verifying certificate', error: err });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
