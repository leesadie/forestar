import { create } from 'zustand';

interface Prompt3ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePrompt3Modal = create<Prompt3ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePrompt3Modal;