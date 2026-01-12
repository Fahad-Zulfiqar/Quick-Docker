import { ChevronLeft, Edit, Trash2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import locationPin from "@/assets/icons/locationPin.svg";
type Props = {};

const address = [
  {
    id: "01",
    title: "Home",
    address: "lorem addres 23w",
  },
  {
    id: "01",
    title: "Khalda House",
    address: "lorem addres 23wdfgdfgsdfgdfgdsfgsddfgdfg",
  },
];

const SelectAddress = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col justify-between">
      <div>
        <div
          onClick={() => navigate(-1)}
          className="flex justify-start items-center p-4 bg-white"
        >
          <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2 text-base font-bold text-primaryColor">
            Select Address
          </button>
        </div>

        <div className="mx-20 my-10">
          <button
            onClick={() => navigate("/add-address")}
            className="bg-primaryColor w-full rounded-[15px] px-3 py-2 text-white text-lg font-medium"
          >
            + Add New Address
          </button>
        </div>

        <div>
          {address.map((item) => (
            <div className="flex gap-4  items-center bg-white p-4 border-[#F4F4F6] border rounded-[8px] m-4">
              <img src={locationPin} />
              <div className="w-full">
                <div className="flex w-full justify-between items-center">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex gap-2">
                    <Edit size={20} className="text-[#647583]" />
                    <Trash2 size={20} className="text-[#647583]" />
                  </div>
                </div>
                <p className="max-w-52 overflow-hidden text-nowrap">
                  {item.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 mx-4">
        <button
          onClick={() => navigate("/select-plan")}
          className="bg-primaryColor w-full rounded-[15px] px-3 py-3 text-white text-lg font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectAddress;
