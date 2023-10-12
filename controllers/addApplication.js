const Add = (req, res) => {
  try {
    if (req.authInfo) {
      console.log("JKJK");
      res.status(400).json({ error: req.authInfo.errorMessage });
      console.log(req.authInfo.errorMessage);
    }
    console.log(req.body);
    console.log(req.file);
    res.status(201).json("SAVED");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default Add;
