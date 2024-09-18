function Items({ items, dele, clear }) {
    return (
        <div>
            <div className="items">
                {items?.map((it, i) => {
                    return (
                        <div key={i} className="items-list">
                            <input type="checkbox" className="item-check" />
                            <p>{it.quantity} {it.name}</p>
                            <button className="delete" onClick={() => dele(i)}>x</button>
                        </div>
                    )
                })}
            </div>
            {items.length > 0 ? (
                <div className="sort-clear">
                    <select>
                        <option value="">Sort items</option>
                        <option value="status">Sort by Status</option>
                    </select>
                    <button onClick={clear}>Clear List</button>
                </div>
            ) : null}
        </div>
    )
}

export default Items;