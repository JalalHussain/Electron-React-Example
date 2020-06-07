import React, {Component} from 'react';
import NewsCard from '../NewsCard';
import {InfoConsumer} from '../Context';

class News extends Component{
    render() {
        return (
                <InfoConsumer>
                    {value =>{
                        return value.news.map(item => {
                            return <NewsCard key={item.id} item={item}></NewsCard>
                        })
                    }

                    }
                </InfoConsumer>
        );
    }
}

export default News;
