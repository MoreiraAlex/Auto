import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const configAtom = atomWithStorage('config', {
  style: 'default',
  theme: 'zinc',
})

export function useConfig() {
  return useAtom(configAtom)
}
