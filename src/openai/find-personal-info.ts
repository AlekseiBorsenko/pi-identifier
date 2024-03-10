
import OpenAI from "openai";

const openai = new OpenAI();

// in this case an integration with AI. In this case this is a simple function. In case I had to handle some state on it. I probably would have used a class.
export const findPersonalInfo = async (input:string):Promise<string> => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: `Find personal information bits in this text: "${input}"` }],
        model: "gpt-3.5-turbo",
    });

    if(!completion.choices[0].message.content){
        throw new Error('failed to retrieve openai response content')
    }

    return completion.choices[0].message.content;
}
