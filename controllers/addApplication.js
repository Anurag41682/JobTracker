const Add = (req, res) => {
  try {
    if (req.authInfo) {
      res.status(400).json({ error: req.authInfo.errorMessage });
    }
    res.status(201).json("SAVED");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default Add;
