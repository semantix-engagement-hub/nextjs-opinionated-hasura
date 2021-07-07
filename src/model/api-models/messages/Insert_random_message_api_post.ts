import { z } from 'zod'
import { Insert_Messages_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { MessagesValidationSchema } from '../../schemas/MessagesValidationSchema'

export interface Insert_random_message_api_post {
  input: z.infer<typeof MessagesValidationSchema>
  output: Insert_Messages_OneMutation
}

export const insert_random_message_api_post_Config: ApiConfig = {
  url: '/api/messages/insert_random_message_api_post',
  method: 'post',
  responseType: 'json',
}
