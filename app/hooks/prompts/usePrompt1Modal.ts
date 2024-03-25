import { create } from 'zustand';

interface Prompt1ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePrompt1Modal = create<Prompt1ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePrompt1Modal;