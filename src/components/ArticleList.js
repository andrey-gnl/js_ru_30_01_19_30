import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
		toggleOpenBlock: PropTypes.func,
		openBlockId: PropTypes.string
    }

    render() {
        const {articles, toggleOpenBlock} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == this.props.openBlockId}
                toggleOpen={toggleOpenBlock(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}


ArticleList.defaultProps = {
    articles: []
}

export default accordion(ArticleList)