import { API_URL } from "./constants";

export const insertCard = (cardData) => {
  return fetch(`${API_URL}/card`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData),
  });
};

export const getCards = async (remeberLevel) => {
  return (
    await fetch(
      `${API_URL}/cards${remeberLevel ? `?level=${remeberLevel}` : ""}`
    )
  ).json();
};

export const updateCards = async ({ id, status }) => {
  return (
    await fetch(`${API_URL}/card/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
  ).json();
};


