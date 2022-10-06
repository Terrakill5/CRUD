import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    /* const db = await connect("mongodb://localhost/mevn-database");TerraNeil  7tbW7Q1NMA4w1fMn*/
    await connect("mongodb+srv://TerraNeil:7tbW7Q1NMA4w1fMn@crud3.ppzpwd0.mongodb.net/?retryWrites=true&w=majority");
  } catch (error)
  {
    console.error(error);
  }
};
