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
      response_format: 'b64_json',
      quality: 'hd',
      size: '1024x1024',
    })

    const response: BaseResponse<string> = {
      data: data[0].b64_json as string,
      isSuccess: true,
      message: 'Generación exitosa!',
    }

    return response

  } catch (error) {    
    return {
      data: '',
      isSuccess: false,
      message: `Ocurrió algo inesperado!, Error: ${error}`,
    }
  }
}