import { create } from 'zustand';

interface StartModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useStartModal = create<StartModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useStartModal;