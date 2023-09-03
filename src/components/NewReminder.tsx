import { FormEvent, useState } from "react"

type NewReminderProps = {
    onAddReminder: (title: string) => void,
}

function NewReminder({onAddReminder} : NewReminderProps){
    const[title, setTitle] = useState('')

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        if (!title) return
        onAddReminder(title)
        setTitle('')
    }

    return (
        <>
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input 
                id="title" 
                type="text" 
                className="form-control" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary rounded-pill my-3">Add Reminder</button>
        </form>
        </>
    )
}

export default NewReminder
