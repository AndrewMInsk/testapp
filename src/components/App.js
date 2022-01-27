import ArticleList from "./ArticleList/index.js"
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PureComponent } from "react/cjs/react.production.min";

class App  extends PureComponent{
    state = {
        reverted: false
    }
    articles2 = articles.slice();
    render() {
        return (
        <div className="container">
            <h1 className="display-3">App name</h1>
            <button onClick={this.revert}>Revert</button>
            <ArticleList articles2 = {this.state.reverted? this.articles2.slice().reverse(): this.articles2} flag={true}/>
        </div>
    )
    }
    revert = ()=>{
        this.setState({
            reverted : !this.state.reverted
            
    })
    }



}
export default App
