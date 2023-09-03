import Reminder from "../models/Reminder"

interface ReminderListProps {
    items: Reminder[],
    onRemoveReminder: (id: number) => void,
}
export function ReminderList({items, onRemoveReminder} : ReminderListProps){
    return (
        <>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.title}
                        <button className="btn btn-outline-danger mx-2 rounded-pill" onClick={() => onRemoveReminder(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}