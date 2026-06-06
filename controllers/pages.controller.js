export const getHome = async (req, res) => {
  try {
    res.render("index", {
      title: "Crafting Digital Excellence",
      page: "home",
      projects: [],
      services: []
    });
  } catch (error) {
    console.error("Home controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getPortfolio = async (req, res) => {
  try {
    res.render("portfolio", {
      title: "Portfolio",
      page: "portfolio",
      projects: []
    });
  } catch (error) {
    console.error("Portfolio controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getServices = async (req, res) => {
  try {
    res.render("services", {
      title: "Services",
      page: "services",
      services: []
    });
  } catch (error) {
    console.error("Services controller error:", error);
    res.status(500).send("Server Error");
  }
};

export const getAbout = (req, res) => {
  res.render("about", {
    title: "About Us",
    page: "about"
  });
};

export const getContact = (req, res) => {
  res.render("contact", {
    title: "Contact Us",
    page: "contact",
    successMessage: null,
    errorMessage: null
  });
};