function FormSec({ submission }) {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="formsec">
            <p>What do you need for your trip?</p>
            <form onSubmit={submission}>
                <select required>
                    <option value="">Select quantity</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <input type="text" placeholder="Item..." required />
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default FormSec;