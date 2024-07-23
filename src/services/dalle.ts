import { OpenAiClient } from "@/config/openai"
import { BaseResponse } from "@/models/response"

export async function generateContent(prompt: string): Promise<BaseResponse<string>> {
  if (!prompt || prompt.length === 0) {
    throw new Error('No prompt provided')
  }

  try {
    const { data } = await OpenAiClient.images.generate({
      model: 'dall-e-3',
      prompt,
      response_format: 'url',
      quality: 'hd',
      size: '1024x1024',
    })

    const response: BaseResponse<string> = {
      data: data[0].url as string,
      isSuccess: true,
      message: 'Generation successful!',
    }

    return response

  } catch (error) {

    console.log(error)
    
    return {
      data: '',
      isSuccess: false,
      message: 'Generation failed!'
    }
  }
}