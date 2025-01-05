import React from "react";

const ThanksgivingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="max-w-[75%] text-center border-2 p-10 border-primary rounded-md">
        <p>
          Your Order has been placed successfully. We are ready to processing
          your order.
        </p>
        <p className="text-green-500">
          Thank you for your order in Dream Blue Fashion
        </p>
      </div>
    </div>
  );
};

export default ThanksgivingPage;
