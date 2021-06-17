import Desk from "../model/Desk";

export const mainController = (req, res) => {
  res.render("screens/main");
};

export const resultController = async (req, res) => {
  const { color } = req.query;

  if (color === "--선택--") {
    res.render("screens/main", { errorMsg: "색상을선택해주세요." });
  } else {
    try {
      const deskList = await Desk.find(
        {
          color: color,
        },
        {}
      );
      res.render("screens/result", { list: deskList });
    } catch (e) {
      console.log(e);
      mainController(req, res);
    }
  }
};
