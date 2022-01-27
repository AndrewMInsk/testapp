import React from 'react'
import Article from '../Article'
import {PureComponent} from 'react'
class ArticleList extends PureComponent{
    state = {
        idOpen : '56c782f1978fdf9a0100df52'
    }
    render(){
        const articleElements = this.props.articles2.map((article, index)=>
        <li 
        key={article.id}><Article onTest={this.bindFunction2.bind(this, article.id)} article={article} isDefaultOpen={index===0} isOpen={this.state.idOpen == article.id}/></li>);

        return (
            <ul>
                
                {articleElements}
            </ul>
        )
    }
    bindFunction2 = openArticleId => {
  
        this.setState({
            idOpen : (this.state.idOpen == openArticleId)?null: openArticleId
        })
    }
}    
export default ArticleList
