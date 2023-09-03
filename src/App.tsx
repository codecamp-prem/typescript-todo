import { useEffect, useState } from 'react'
import './App.css'
import { ReminderList } from './components/ReminderList'
import Reminder from './models/Reminder'
import ReminderService from './services/Reminder'
import NewReminder from './components/NewReminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const lists = await ReminderService.getReminders()
    setReminders(lists)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title)
    setReminders([newReminder, ...reminders])
  }

  return (
    <>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </>
  )
}

export default App
