import { create } from 'zustand';

interface Prompt5ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePrompt5Modal = create<Prompt5ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePrompt5Modal;