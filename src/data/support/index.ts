export type ChatMessage = {
  id: string;
  sender: "admin" | "user";
  message: string;
  time: string;
  seen: boolean;
};

export type Support = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "reserved" | "available" | "cancelled";
  chat: ChatMessage[];
};
export const supports: Support[] = [
  {
    id: "t1",
    title: "تور کیش 3 روزه",
    description: "اقامت در هتل 5 ستاره + گشت شهری",
    date: "امروز",
    status: "reserved",
    chat: [
      {
        id: "m1",
        sender: "user",
        message: "سلام، می‌خواستم بدونم تور کیش هنوز موجوده؟",
        time: "10:15",
        seen: true,
      },
      {
        id: "m2",
        sender: "admin",
        message: "سلام، بله تور کیش برای تاریخ 10 آذر موجود هست.",
        time: "10:17",
        seen: true,
      },
    ],
  },
  {
    id: "t2",
    title: "کنسرت محسن یگانه",
    description: "سالن میلاد نمایشگاه بین‌المللی تهران",
    date: "دیروز",
    status: "available",
    chat: [
      {
        id: "m1",
        sender: "user",
        message: "بلیت کنسرت محسن یگانه رو چطور می‌تونم رزرو کنم؟",
        time: "12:00",
        seen: true,
      },
      {
        id: "m2",
        sender: "admin",
        message: "از طریق بخش خرید بلیت می‌تونید رزرو کنید.",
        time: "12:02",
        seen: false,
      },
    ],
  },
  {
    id: "t3",
    title: "پرواز تهران - مشهد",
    description: "بلیط رفت با ایران‌ایر",
    date: "29 آبان 1404",
    status: "cancelled",
    chat: [
      {
        id: "m1",
        sender: "user",
        message: "چرا پرواز تهران-مشهد لغو شده؟",
        time: "09:45",
        seen: true,
      },
      {
        id: "m2",
        sender: "admin",
        message: "به دلیل شرایط آب و هوایی پرواز لغو شد.",
        time: "09:47",
        seen: true,
      },
    ],
  },
];
