const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const enrolledUsersRoutes = require('./routes/EnrolledUsers');
const courseDetailsRoutes = require('./routes/CourseDetails');
const fetchAllDetailsRoutes = require('./routes/fetchAllDetails');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/enrolledUsers', enrolledUsersRoutes);
app.use('/api/courseDetails', courseDetailsRoutes);
app.use('/api/fetchAllDetails', fetchAllDetailsRoutes);

mongoose.connect('mongodb+srv://shilpishuklajp:4ww7p2edFq8WlHCC@cluster0.vszhwns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => console.error(err));
