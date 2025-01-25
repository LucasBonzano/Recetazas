import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        axios.get('/api/example/')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);
    return (
        <div className="App flex justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-500">React + Django</h1>
            <p>{message || 'Cargando...'}</p>
        </div>
    );
};

export default Home