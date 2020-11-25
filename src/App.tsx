import { useEffect, useState } from 'react';

import { boot } from './module/login/main';

function App() {
    const [login, renderLogin] = useState(null);

    useEffect(() => {
        boot(renderLogin);
    }, [])

    return login;
}

export default App;
