import { create } from 'zustand';

interface Prompt2ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePrompt2Modal = create<Prompt2ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePrompt2Modal;