import { sendMessage } from "@/db/repository/Message";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const from = req.body.from;
      const to = req.body.to;
      const content = req.body.content;

      if (from == undefined || to == undefined || content == undefined) {
        console.log("Some field is missing");
        throw {
          error: "INVALID INPUT",
          explaination:
            "Please provide all the required filed 'from', 'to', 'content'",
        };
      }

      const data = {
        from: from,
        to: to,
        content: content,
      };
      console.log(data);
      const messageSent = await sendMessage(data);

      res.status(201).json({
        success: true,
        message: "Message has been sent successfully",
        data: messageSent,
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
        message: "Message cannot be sent",
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
