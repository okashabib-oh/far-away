function Stats({ items, packed }) {
    return (
        <div className="stats">
            <p>You have {items.length} items in your list, and you already packed {packed.length} ({packed.length / items.length * 100}%)</p>
        </div>
    )
}

export default Stats;