export function User() {
    const user = {
        firsName: 'César',
        lastName: 'Medina'
    }
    return <div>
        <h3>{JSON.stringify(user)}</h3>
        <p>
            Pero también podemos representar los datos del objeto en lugar stringmiar todo el objeto
        </p><br/>
        <h3>{user.firsName} {user.lastName}</h3><br/>
    </div>
}

export function Operation() {
    function add(x,y) {
        return x + y;
    }
    return (
        <div>
            <h4>{add(15 , 26)}</h4>
        </div>
    )
}