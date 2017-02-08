import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape).isRequired,
		//? toggleOpenBlock: PropTypes.func.isRequired - почему при isRequired ошибка в консоле ? http://take.ms/6fcXE
		toggleOpenBlock: PropTypes.func,
		openBlockId: PropTypes.oneOfType([ PropTypes.string, PropTypes.number])
    };

    render() {
        const {articles, toggleOpenBlock} = this.props;

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