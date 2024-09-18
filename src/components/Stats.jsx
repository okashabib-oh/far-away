function Stats({ items }) {
    return (
        <div className="stats">
            <p>You have {items.length} items in your list, and you already packed 0 (0%)</p>
        </div>
    )
}

export default Stats;