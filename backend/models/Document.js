module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      projectID: Number,
      name: String,
      description: String,
      disponible: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Document = mongoose.model("document", schema);
  return Document;
};
