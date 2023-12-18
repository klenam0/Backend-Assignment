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

        EmergencyName : {
            type: String,
            required: [true, "Please enter patient Emergency Name "]
        },

        patientContact : {
            type: String,
            required: [true, "Please enter patient Contact"]
        },

        relationshipWithPatient : {
            type: String,
            required: [true, "Please enter your relationship with patient "]
        },

 

    }
)