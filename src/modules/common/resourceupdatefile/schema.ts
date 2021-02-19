import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  file: String,
  minecraftVersions: [String],
  requiresFileChanges: Boolean
});

export default mongoose.model("resourceupdatefiles", schema);