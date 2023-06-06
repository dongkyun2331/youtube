const fakeUser = {
  username: "Pori",
  loggedin: false,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.render("Search");
export const upload = (req, res) => res.render("Upload");
export const deleteVideo = (req, res) => {
  return res.render("Delete Video");
};
