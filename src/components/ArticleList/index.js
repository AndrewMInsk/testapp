import React from 'react'
import Article from '../Article'
export default function ArticleList({articles2}){
    const articleElements = articles2.map((article, index)=><li key={article.id}><Article article={article} isDefaultOpen={index===0}/></li>);

return (
    <ul>
        
        {articleElements}
    </ul>
)
}