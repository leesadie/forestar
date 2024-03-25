import { create } from 'zustand';

interface Prompt7ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePrompt7Modal = create<Prompt7ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePrompt7Modal;