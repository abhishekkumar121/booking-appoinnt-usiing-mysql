const Appointment = require("../models/appointment");

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    await Appointment.create({ name, email, date, time });
    res.status(200).json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Database error" });
  }
};
