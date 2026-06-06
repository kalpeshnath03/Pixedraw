import Contact from "../models/Contact.js";

export const handleContactSubmit = async (req, res) => {
  try {
    const { username, email, phone, service, message } = req.body;
    
    if (!username || !email || !phone || !service || !message) {
      return res.render("contact", {
        title: "Contact Us",
        page: "contact",
        successMessage: null,
        errorMessage: "Please fill in all required fields."
      });
    }

    const newContact = new Contact({
      username,
      email,
      phone,
      service,
      message
    });

    await newContact.save();

    res.render("contact", {
      title: "Contact Us",
      page: "contact",
      successMessage: "Thank you for contacting Pixedraw! We have received your inquiry and will respond shortly.",
      errorMessage: null
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.render("contact", {
      title: "Contact Us",
      page: "contact",
      successMessage: null,
      errorMessage: "There was an error processing your request. Please try again later."
    });
  }
};
