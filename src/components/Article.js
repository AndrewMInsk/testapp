import React, {Component, PureComponent} from 'react'
class Article extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.handleClick = handleClick.bind(this);

    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.isDefaultOpen!=this.props.isDefaultOpen){
    //         this.setState({
    //             isOpen: nextProps.isDefaultOpen
    //         })
    //     }
    // }
    componentWillUpdate(){
        console.log('---', 'update');

    }
    render(){
        const {article, isOpen, onTest} = this.props

        const body = isOpen && <section>{article.text}</section>
        return (
            <div className='test' style={{color:'red'}}>
                <h2 onClick={this.increaseCounter}>{article.title}
                clicked {this.state.counter}
                <button onClick={onTest}>
                    {isOpen?'close':'open'}

                </button></h2>
                {body}
                <h3>Create : {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    increaseCounter = () => {
        console.log('---', 'clicked 111');
        this.setState({
            counter : this.state.counter+1
        })
    }
}

function handleClick(){
    console.log('---', 'clicked');
    // this.setState({
    //     isOpen : !this.state.isOpen
    // })
}
export default Article