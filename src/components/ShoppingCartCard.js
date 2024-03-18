// ShoppingCartCard.js


const ShoppingCartCard = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, checkout }) => {
    const total = cartItems.reduce((acc, cur) => acc + parseFloat(cur.price.replace('Rs.', '')) * cur.quantity, 0);


    return (
        <div className="card" style={{ width: '300px', position: 'fixed', top: '100px', right: '20px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="card-header">Shopping Cart</div>
            <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="w-100">
                                <span className="text-wrap" style={{ fontSize: '0.9rem' }}>{item.name}</span>
                                <span className="text-muted ml-2"> x {item.quantity}</span>
                            </div>
                            <div className="d-flex">
                                <button type="button" className="btn btn-sm btn-danger mx-2" onClick={() => decreaseQuantity(item)}>-</button>
                                <span className="text-muted">{item.quantity}</span>
                                <button type="button" className="btn btn-sm btn-success mx-2" onClick={() => increaseQuantity(item)}>+</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2" onClick={() => removeFromCart(item)} data-toggle="tooltip" data-placement="top" title="Remove">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="card-body">
                <p className="card-text" style={{ fontSize: '0.9rem' }}>Total: Rs.{total}</p>
                <button className="btn btn-primary" onClick={checkout}>Checkout</button>
            </div>
        </div>
    );
};


export default ShoppingCartCard;
