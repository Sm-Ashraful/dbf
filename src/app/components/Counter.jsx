"use client";
import React, { useState, useEffect } from "react";

const Counter = ({ initialCount = 1, onCountChange }) => {
  const [itemCount, setItemCount] = useState(initialCount);

  function decreaseItemCount() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  function increaseItemCount() {
    setItemCount(itemCount + 1);
  }

  // Notify parent component of count changes
  useEffect(() => {
    if (onCountChange) {
      onCountChange(itemCount);
    }
  }, [itemCount, onCountChange]);

  return (
    <div className="flex gap-5 items-center">
      <div className="flex items-center w-[120px] justify-around mt-3 bg-black/10 py-2 rounded-full">
        <button
          className={`text-xl font-bold px-3`}
          disabled={itemCount === 1}
          onClick={decreaseItemCount}
        >
          -
        </button>
        <p> {itemCount} </p>
        <button className="text-xl font-bold px-3" onClick={increaseItemCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
