import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ChatGptConfig, PersonaInfo } from '@/types'
import { NotificationInfo } from '@/types/admin'

export interface ConfigState {
  // 配置信息
  config: ChatGptConfig
  // 模型
  models: Array<{
    label: string
    value: string
  }>
  // 配置弹窗开关
  configModal: boolean
  // 修改配置弹窗
  setConfigModal: (value: boolean) => void
  // 修改配置
  changeConfig: (config: ChatGptConfig) => void
  notifications: Array<NotificationInfo>
  shop_introduce: string
  user_introduce: string
  replaceData: (config: { [key: string]: any }) => void
  website_title: string
  website_description: string
  website_keywords: string
  website_logo: string
  website_footer: string
  invite_introduce: string,
  random_personas: Array<PersonaInfo>
}

const configStore = create<ConfigState>()(
  persist(
    (set, get) => ({
      configModal: false,
      notifications: [],
      shop_introduce: '',
      user_introduce: '',
      website_title: '',
      website_description: '',
      website_keywords: '',
      website_logo: '',
      website_footer: '',
      invite_introduce: '',
	  random_personas: [],
      models: [
        {
          label: 'gemini-1.5-flash(gemini)',
          value: 'gemini-1.5-flash(gemini)'
        },
        {
          label: 'gemini-1.5-pro(gemini)',
          value: 'gemini-1.5-pro(gemini)'
        },
        {
          label: 'gemini-1.0-pro(gemini)',
          value: 'gemini-1.0-pro(gemini)'
        },
        {
          label: 'gpt-3.5-turbo(openai)',
          value: 'gpt-3.5-turbo(openai)'
        },
        {
          label: 'gpt-3.5-turbo-16k(openai)',
          value: 'gpt-3.5-turbo-16k(openai)'
        },
        {
          label: 'gpt-4(openai)',
          value: 'gpt-4(openai)'
        }
      ],
      config: {
        model: 'gemini-1.5-flash(gemini)',
        temperature: 0.8,
        presence_penalty: 0,
        frequency_penalty: 0,
        max_tokens: 1888
      },
      setConfigModal: (value) => set({ configModal: value }),
      changeConfig: (config) =>
        set((state: ConfigState) => ({
          config: { ...state.config, ...config }
        })),
      replaceData: (data) => set((state: ConfigState) => ({ ...state, ...data }))
    }),
    {
      name: 'config_storage', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default the 'localStorage' is used
    }
  )
)

export default configStore
