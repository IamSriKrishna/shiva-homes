import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919952952351"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-2xl transition hover:scale-105"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}