import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export function AddFamilyMemberModal({
  isOpen,
  handleClose,
  handleSubmit,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: Function;
}) {
  const [name, setName] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Family Member</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Family Member</FormLabel>
            <Input value={name} onChange={e => setName(e.target.value)}/>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={() => null}>Create</Button>
        </ModalFooter>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}
