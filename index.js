// アレンジ公式
const { Configuration, OpenAIApi } = require("openai");
exports.handler = async (event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{role: "user", content: "Hello world"}],
  });
  console.log(completion.data.choices[0].message);
}