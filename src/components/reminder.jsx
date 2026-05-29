import { CalendarPlus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AddToCalendarButton() {
  const startDate = '20260708T121000Z'
  const endDate = '20260708T181000Z'

  const googleCalendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=Prashant+%26+Sakshi+Wedding` +
    `&dates=${startDate}/${endDate}` +
    `&details=Join+us+for+our+wedding+celebration` +
    `&location=Pune,+Maharashtra`

  return (
    <motion.a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-xl border border-white/30"
    >
      <CalendarPlus size={24} />
    </motion.a>
  )
}