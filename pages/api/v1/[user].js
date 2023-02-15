import { addUser, findUser } from "@/db/repository/User";

// addUser;

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { username } = JSON.parse(req.body);
      console.log("username", username);
      if (username == undefined) {
        console.log("Some field is missing");
        throw {
          error: "INVALID INPUT",
          explaination: "Please provide the required filed 'username'",
        };
      }

      const user = await addUser(username);
      console.log(user);

      res.status(201).json({
        success: true,
        message: "User has been created successfully",
        data: { username },
        error: {},
      });
    } catch (err) {
      if (err.error == "INVALID INPUT") {
        res.status(400).json({
          success: false,
          message: err.error,
          data: {},
          error: err.explaination,
        });
      }

      res.status(500).json({
        success: false,
        message: "User cannot be created",
        data: {},
        error: err,
      });
    }
  } else if (req.method == "GET") {
    // check if the user exists or not

    try {
      const { user } = req.query;
      console.log("params :", req.query);
      if (user == undefined) {
        console.log("Some field is missing");
        throw {
          error: "INVALID INPUT",
          explaination: "Please provide the required filed 'username'",
        };
      }

      const userFound = await findUser(user);
      console.log(userFound);

      res.status(200).json({
        success: true,
        message: "User exists in our db",
        data: { userFound },
        error: {},
      });
    } catch (err) {
      if (err.error == "INVALID INPUT") {
        res.status(400).json({
          success: false,
          message: err.error,
          data: {},
          error: err.explaination,
        });
      }

      res.status(500).json({
        success: false,
        message: "User cannot be found in our db",
        data: {},
        error: err,
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: "Method not allowed",
      data: {},
      error: `${req.method}, is not allowed on this api endpoint`,
    });
  }
}
