const express= require("express")

const {userModel}= require("../Models/prompModel")
const userRouter= express.Router()
userRouter.use(express.json())

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);


// const conHis= []
userRouter.post("/startprompt",async(req,res)=>{
    try {
        const {prompt,language}= req.body
        const question= { role: "user", content: `provide me sayari on ${prompt}  in ${language} language and do not translate in english ` }
        // conHis.push(question)
         const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [question],
            max_tokens: 1000
          });
          const reply = response.data.choices[0].message.content.trim().split("\n").join(" ")
          const sayariData = [{ role: "assistant", content: reply }];
          res.send(sayariData);
    } catch (error) {
        console.log(error.message)
    }
})


module.exports= {userRouter}