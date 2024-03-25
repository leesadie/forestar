import { create } from 'zustand';

interface PreMoodModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePreMoodModal = create<PreMoodModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreMoodModal;