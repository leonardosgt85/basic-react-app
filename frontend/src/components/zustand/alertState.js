import create from 'zustand'

const useStore = create(set => ({
  alertData: null,
  setAlertData: (data) => set(state => ({ alertData: data })),
}))

export default useStore;