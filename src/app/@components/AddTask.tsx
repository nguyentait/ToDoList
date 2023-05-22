import React, { useState } from "react";
import {Modal}  from './Modal';
import { AiOutlinePlus } from "react-icons/ai";
export default function AddTask() {
  const [modalOpen,setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button className="btn btn-primary w-full" onClick={()=>setModalOpen(true)}>
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen = {modalOpen}/>
    </div>
  );
}
