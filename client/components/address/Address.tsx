import React from "react";
import AddAddressModal from "./AddAddressModal";

export default function Example() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-primaryColor px-4 py-2 text-white"
      >
        Open modal
      </button>

      <AddAddressModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) => {
          console.log("submitted:", data);
          setOpen(false);
        }}
        initialCountry="US"
      />
    </>
  );
}
