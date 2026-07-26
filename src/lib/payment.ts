export const createOrder = async (amount: number) => {
  const res = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    throw new Error("Unable to create payment order");
  }

  return res.json();
};