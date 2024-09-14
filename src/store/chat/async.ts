import { delUserMessages, getUserMessages } from '@/request/api'
import chatStore from './slice'

async function fetchChatMessages() {
  const res = await getUserMessages()
  if (!res.code) {
    chatStore.getState().changeChatMessage(res.data)
    chatStore.getState().addChat()
  }
  return res
}

async function fetchDelUserMessages(params: { id?: string | number; type: string }) {
  const parentMessageId = params.type === 'delAll' ? 'delAll' : params.id;
  const res = await delUserMessages({ parent_message_id: parentMessageId })
  if (!res.code) {
    if (params.type === 'clear' && params.id) {
      chatStore.getState().clearChatMessage(params.id)
    } else if (params.type === 'del' && params.id) {
      chatStore.getState().delChat(params.id)
    } else if (params.type === 'delAll') {
      chatStore.getState().clearChats()
    }
  }
  return res
}

export default {
  fetchChatMessages,
  fetchDelUserMessages
}
