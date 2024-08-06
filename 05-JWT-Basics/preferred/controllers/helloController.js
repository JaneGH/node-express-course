const hello = (req, res) => {
  res.status(200).json({ message: `Nice to meet you, ${req.user.username}!` });
};

module.exports = {
  hello,
};
