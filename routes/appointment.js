import express from 'express';
import { bookAppointment, getAllAppointments } from '../controllers/Appointment.js';


const router = express.Router();

router.post('/book', bookAppointment);
router.get("/all", getAllAppointments);

export default router;
