import axios from "axios";

const params = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    console.log("Backend Url", process.env);
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${url}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// export const makePaymentRequest = axios.create({
//   baseURL: process.env.REACT_APP_URL,
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//   },
// });
export const makePaymentRequest = async (products) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/stripe/create-checkout-session`,
      {
        products,
      },
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const createOrder = async (products) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/orders`,
      {
        products,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
