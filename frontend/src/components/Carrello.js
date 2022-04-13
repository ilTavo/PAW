import React from 'react';

export default function Carrello(props){
    const{cartItems, onAdd} = props;
    return(
        <div className="block col-1">
            <h2>Ordinazione</h2>
            <div>
                {cartItems.length === 0 && <div>Nessuna ordinazione</div>}

            </div>
            {cartItems.map((item)=>(
                console.log(item.nome_prod),
                <><div key={item.id} className="row">
                    <h3>{item.nome_prod}</h3>
                    
                </div><div>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onAdd(item)} className="remove">-</button>
                    </div></>
                    
            ))}

        </div>
    )
}