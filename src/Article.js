import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {
    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props
        console.log('---', 123)
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
                <CommentsList comments={this.props.article.comments} />
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}