// MODAL PROPS -
export type ModalProps = {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode
}

// HYDRATE PROPS -
export type hydrateProps = {
  children: React.ReactNode;
};

// USE-STORE-MODAL 
export type useStoreProps = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

// DASHBOARD PAGE PROPS -
export type dashboardProps = {
  params: {storeId: string}
}