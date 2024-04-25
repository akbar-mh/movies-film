
import { connectToDB } from "./utils";
import{ movies} from "./models"

export const fetchMovie = async () => {
  

  try {
    connectToDB();
     /*  */
    const users = await movies.find()
     
    return { users };
  } catch (err) {
    
    console.log(err);
    throw new Error("Failed to fetch Movie!");
  }
};

