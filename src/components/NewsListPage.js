// NewsListPage.js
import React, { useState, useEffect } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { Link } from 'react-router-dom';
import { API_URLS } from '../api';
import '../styles.css';

function NewsListPage() {
    const [newsList, setNewsList] = useState([]);
    const [dateFilter, setDateFilter] = useState(null);

    useEffect(() => {
        fetch(API_URLS.news)
            .then(response => response.json())
            .then(data => {
                setNewsList(data);
            });
    }, []);

    const handleReceivedNews = (data) => {
        setNewsList(data.news);
    };

    const filteredNewsList = dateFilter
        ? newsList.filter(news => new Date(news.published_at) >= new Date(dateFilter))
        : newsList;

    return (
        <div>
            <h1>Список новостей</h1>
            <label>Показать новости от...
                <input type="date" onChange={e => setDateFilter(e.target.value)}/>
            </label>
            <ActionCableConsumer
                channel={{channel: 'NewsChannel'}}
                onReceived={handleReceivedNews}
            />
            {
                filteredNewsList.map(news => (
                    <div key={news.id} className="news-item">
                        <h2><Link to={`/news/${news.id}`}>{news.title}</Link></h2>
                        {news.images.map((image, index) => (
                            <img key={index} src={image} alt={`News ${news.id}`}/>
                        ))}
                        <p>{news.content}</p>
                    </div>
                ))}
        </div>
    );
}

export default NewsListPage;
