function Stats({ items, packed }) {
    const percentage = packed?.length / items?.length * 100;
    return (
        <div className="stats">
            <p>You have {items.length} items in your list, and you already packed {packed.length} ({!isNaN(percentage) ? percentage.toFixed(0) : 0}%)</p>
        </div>
    )
}

export default Stats;