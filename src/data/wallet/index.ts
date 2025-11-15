export type WalletActivity = {
  title: string;
  type: "increment" | "decrement";
  datetime: { time: string; date: string };
  price: number;
};

export const walletActivities: WalletActivity[] = [
  {
    title: "رزرو تور کیش",
    type: "decrement",
    datetime: { time: "14:30", date: "1404/08/20" },
    price: 2500000,
  },
  {
    title: "رزرو تور مشهد",
    type: "decrement",
    datetime: { time: "09:15", date: "1404/08/21" },
    price: 1800000,
  },
  {
    title: "شارژ کیف پول",
    type: "increment",
    datetime: { time: "11:00", date: "1404/08/22" },
    price: 5000000,
  },
  {
    title: "رزرو تور اصفهان",
    type: "decrement",
    datetime: { time: "16:45", date: "1404/08/23" },
    price: 1200000,
  },
  {
    title: "رزرو تور شیراز",
    type: "decrement",
    datetime: { time: "10:20", date: "1404/08/24" },
    price: 1500000,
  },
  {
    title: "شارژ کیف پول",
    type: "increment",
    datetime: { time: "08:00", date: "1404/08/25" },
    price: 3000000,
  },
  {
    title: "رزرو تور یزد",
    type: "decrement",
    datetime: { time: "13:10", date: "1404/08/26" },
    price: 1000000,
  },
  {
    title: "رزرو تور قشم",
    type: "decrement",
    datetime: { time: "19:30", date: "1404/08/27" },
    price: 2200000,
  },
  {
    title: "شارژ کیف پول",
    type: "increment",
    datetime: { time: "12:00", date: "1404/08/28" },
    price: 4000000,
  },
  {
    title: "رزرو تور تهران‌گردی",
    type: "decrement",
    datetime: { time: "17:45", date: "1404/08/29" },
    price: 800000,
  },
];
