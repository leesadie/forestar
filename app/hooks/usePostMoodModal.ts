import { create } from 'zustand';

interface PostMoodModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePostMoodModal = create<PostMoodModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePostMoodModal;