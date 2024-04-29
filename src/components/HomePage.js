import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Добро пожаловать на главную страницу!</h1>

            <nav>
                <ul>
                    <li><Link to="/news">Новости</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;