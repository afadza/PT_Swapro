"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

export default function ModalRegister() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault;
          setOpenModal(true);
        }}
        className="bg-transparant w-full"
      >
        Register
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        className="w-full h-screen items-center flex justify-center pt-[35%]"
      >
        <Modal.Body className="bg-white rounded-md p-4">
          <div className="text-center items-center flex flex-col">
            <h3 className="mb-5 text-lg font-bold">Account created</h3>
            <img
              src="https://i.ibb.co/4Khb1Tj/pngwing-com-1.png"
              className="w-20 h-20"
            />
            <div>
              <div className="text-sm flex gap-1 ">
                <p>
                  Your verification has been sent to
                  <span className="font-bold"> example@mail.com</span>
                </p>
              </div>
              <p className="text-sm">make sure to check on registered email</p>
            </div>
            <div className="w-full">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-emerald-700 text-white font-bold w-full mt-4 rounded-md p-2"
              >
                Done
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
