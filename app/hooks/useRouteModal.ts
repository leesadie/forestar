import { create } from 'zustand';

interface RouteModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRouteModal = create<RouteModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRouteModal;