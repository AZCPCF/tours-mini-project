export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  type: "support" | "message" | "offer" | "reminder";
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  link?: string;
};

export const notifications: Notification[] = [
  {
    id: "n1",
    title: "پاسخ جدید پشتیبانی",
    message: "ادمین به تیکت تور کیش پاسخ داد.",
    date: "15 آبان 1404 - 10:20",
    type: "support",
    description: "برای مشاهده جزئیات، وارد صفحه تیکت شوید.",
    action: {
      label: "مشاهده تیکت",
      onClick: () => console.log("Go to ticket t1"),
    },
  },
  {
    id: "n2",
    title: "یادآوری پرواز",
    message: "پرواز تهران - مشهد فردا ساعت 08:00 انجام می‌شود.",
    date: "15 آبان 1404 - 09:00",
    type: "reminder",
    description: "لطفاً 2 ساعت قبل از پرواز در فرودگاه حاضر باشید.",
  },
  {
    id: "n3",
    title: "تخفیف ویژه",
    message: "20% تخفیف برای تور شیراز تا پایان هفته.",
    date: "14 آبان 1404 - 18:45",
    type: "offer",
    link: "/offers/shiraz",
  },
  {
    id: "n4",
    title: "پیام کاربر",
    message: "کاربر جدیدی در چت سوال پرسیده است.",
    date: "13 آبان 1404 - 22:10",
    type: "message",
    description: "برای پاسخ به کاربر وارد بخش چت شوید.",
    action: {
      label: "باز کردن چت",
      onClick: () => console.log("Open chat"),
    },
  },
];
