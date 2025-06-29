const Document = require("../models/document");

exports.createDoc = async (req, res) => {
  const { title, content, visibility } = req.body;
  const doc = await Document.create({
    title,
    content,
    visibility,
    author: req.userId,
    lastModified: new Date(),
  });
  res.status(201).json(doc);
};

exports.getDocs = async (req, res) => {
  const docs = await Document.find({
    $or: [
      { visibility: "public" },
      { author: req.userId },
      { sharedWith: { $elemMatch: { userId: req.userId } } },
    ],
  }).populate("author", "username");
  res.json(docs);
};

exports.updateDoc = async (req, res) => {
  const { id } = req.params;
  const { content, title } = req.body;

  const doc = await Document.findById(id);
  if (!doc) return res.status(404).json({ message: "Document not found" });
  if (doc.author.toString() !== req.userId)
    return res.status(403).json({ message: "Forbidden" });

  doc.content = content;
  doc.title = title;
  doc.lastModified = new Date();
  await doc.save();

  res.json(doc);
};
