import PRODUCTS from "./products";

const ORDERS = [
  {
    id: 213,
    date: "2023-06-01",
    status: "در حال پردازش",
    total: "200000",
    payment_method: "پرداخت آنلاین",
    products: [
      {
        ...PRODUCTS[0],
      },
    ],
    address: {
      first_name: "علی",
      last_name: "رضایی",
      phone: "09123456789",
      state: "اردبیل",
      city: "گرمی",
      postal_code: "1234567890",
    },
  },
];

export default ORDERS;
