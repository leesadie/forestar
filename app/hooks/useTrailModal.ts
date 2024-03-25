import { create } from 'zustand';

interface TrailModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useTrailModal = create<TrailModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useTrailModal;