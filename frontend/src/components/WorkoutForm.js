import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const[title, setTitle] = useState('')
    const[weight, setWeight] = useState('')
    const[reps, setReps] = useState('')
    const[error, setError] = useState(null);
    const[emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(event) => {
        event.preventDefault()

        const workout = {title, weight, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setTitle('')
            setWeight('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New workout added!', json)
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    }

    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Name:</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Weight (lbs):</label>
        <input
          type="numer"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
          className={emptyFields.includes("weight") ? "error" : ""}
        />

        <label>Reps:</label>
        <input
          type="numer"
          onChange={(event) => setReps(event.target.value)}
          value={reps}
          className={emptyFields.includes("reps") ? "error" : ""}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    );
}

export default WorkoutForm