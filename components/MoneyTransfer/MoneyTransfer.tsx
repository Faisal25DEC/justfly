import React from "react";

const MoneyTransfer = () => {
  return (
    <div className="m-auto flex w-[97.5%] flex-col items-center justify-center py-12 md:w-[85%]  md:flex-row-reverse md:justify-between">
      <div className="w-[70%]">
        <img
          src="/images/transfer/transfer.png"
          alt="money-transfer"
          className="w-full"
        />
      </div>
      <div className="px-6">
        <h1 className="text-[40px] font-bold">
          <span className="text-green-primary">Money</span> Transfers
        </h1>
        <p className="pt-6 font-medium text-neutral-600">
          Sending money to your loved ones worldwide has never been easier. At
          Justfly Travels, we offer reliable and efficient Money Transfer
          services with unbeatable rates, ensuring your hard-earned money
          reaches your family and friends on the same day.
        </p>
        <p className="pt-6 font-medium text-neutral-600">
          {" "}
          <span className="text-green-primary border-[1px] border-b-[#1b9d3d]">
            Contact us
          </span>{" "}
          today for the latest rates.
        </p>
      </div>
    </div>
  );
};

export default MoneyTransfer;
