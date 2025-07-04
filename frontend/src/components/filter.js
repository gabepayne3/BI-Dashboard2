import React from "react";
// this renders are dropdown select which allows the user to show only reports from a chosen category.
const Filter = ({options, selected, onChange}) => {
    return (
        <>
<label for="categoryFilter">Filter by category:</label>
<select id="categoryFilter" value={selected} onChange={(e) => onChange(e.target.value)}>
    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
</select></> )
}
export default Filter
