import { FC } from "react";

const PayBar: FC<{ onPay: () => void }> = ({ onPay }) => (
  <div className="px-5 pb-6 pt-4">
    <button
      onClick={onPay}
      className="w-full rounded-xl2 bg-primary text-white py-4 text-[16px] font-semibold shadow-card active:opacity-90"
    >
      Pay Now
    </button>
  </div>
);
export default PayBar;
