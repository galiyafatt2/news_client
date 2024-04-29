// NewsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URLS } from '../api';
import '../styles.css';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetch(`${API_URLS.news}/${id}`)
            .then(response => response.json())
            .then(data => {
                setNews(data);
            });
    }, [id]);

    return news ? (
        <div>
            <h1>{news.title}</h1>
            {news.images.map((image, index) => (
                <img key={index} src={image} alt={`News ${news.id}`} />
            ))}
            <p>{news.content}</p>
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default NewsPage;
