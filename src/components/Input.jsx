function Input({ label, value, onChange }) {
    return (
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} />
        </label>
    );
}

function DateInput({ label, value, onChange }) {
    return (
        <label>
            {label}
            <input type="date" value={value} onChange={onChange} />
        </label>
    );
}

export { Input, DateInput };
