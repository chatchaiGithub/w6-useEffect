import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (count === 0) {
            navigate('/');
            return;
        }
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
    }, [count, navigate]);

    return <div>NotFound {count}</div>;
}

export default NotFound