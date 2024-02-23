"use client";

// IMPORTS -
import { AlertModalProps } from "@/app/partials/types";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div
        className="pt-6 space-x-2
        flex items-center justify-end w-full"
      >
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancel
        </Button>

        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
