// IMPORTS -
import { Store } from "@prisma/client";

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

// SETTINGS PAGE PROPS - 
export type SettingsProps = {
  params: {
    storeId: string;
  };
};

// SETTINGS FORM PROPS -
export type SettingFormProps = {
  initialData: Store;
};

// HEADING PROPS -
export type HeadingProps = {
  title: string;
  description: string;
};

// ALERT MODAL -
export type AlertModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onConfirm: () => void,
  loading: boolean
}