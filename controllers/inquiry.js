import Inquiry from "../models/inquiry.js";

export const submitInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
};

export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }); 
    res.status(200).json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
};
