const mongoose = require('mongoose')

const patientsSchema = mongoose.schema(
    {
        patientName: {
            type: String,
            required: [true, "Please enter patient full name"]
        },

        PatientID: {
            type: Number,
            required: [true, "Please enter patient ID"]
        },

        patientGender: {
            type: String,
            required: [true, "Please enter patient gender"]
        },

        PhoneNumber: {
            type: Number,
            required: [true, "Please enter patient number"]
        },

        residentialAddress: {
            type: String,
            required: [true, "Please enter patient name"]
        },
 

    }
)