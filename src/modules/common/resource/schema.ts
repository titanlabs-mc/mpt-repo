import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  id: String,
  name: String,
  updates: [{
    releaseTime: Number,
    version: String,
    files: [Schema.Types.ObjectId]
  }],
  spigotId: String,
  spigotAuthorId: String,
  dependencies: [String], 
});

export default mongoose.model("resources", schema);