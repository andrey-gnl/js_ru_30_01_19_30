import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import store from '../store'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {
        const {articles, toggleOpenItem, isOpenItem} = this.props;

        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles = () => {

		const {articles, toggleOpenItem, isOpenItem} = this.props;

		const filterSelect = store.getState().filterSelect.map((filter) => {
			return filter.value;
		});

		const filterDate = store.getState().filterDates;
		
		let filteredArticles = articles;

		//filter from data range
		if(filterDate.from) {
			filteredArticles = articles.filter((article) => {
			    return Date.parse(article.date) > Date.parse(filterDate.from)
            })
        }
        //filter to data range
		if(filterDate.to) {
			filteredArticles = filteredArticles.filter((article) => {
				return Date.parse(article.date) < Date.parse(filterDate.to)
			})
		}

		//filter by select
		if (filterSelect.length) {

			filteredArticles = filteredArticles.filter((article) => {
				return filterSelect.includes(article.id);
			});

		}

		const articleElements = filteredArticles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpenItem(article.id)}
                toggleOpen={toggleOpenItem(article.id)}/>
        </li>);
		
		return articleElements;

    }
}
export default accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
    articles: []
}