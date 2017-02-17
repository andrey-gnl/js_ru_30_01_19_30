import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import {connect} from 'react-redux'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

	render() {
		const {articles, toggleOpenItem, isOpenItem, filteredArticles} = this.props;
		const articleElements = filteredArticles.map((article) => <li key={article.id}>
			<Article
				article={article}
				isOpen={isOpenItem(article.id)}
				toggleOpen={toggleOpenItem(article.id)}/>
		</li>);
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}

	// getArticles = () => {
	//
	// const {articles, toggleOpenItem, isOpenItem, selection, dates} = this.props;
	//
	// const filterSelect = selection.map((filter) => {
	// 	return filter.value;
	// });
	//
	// const filterDate = dates;
	//
	// let filteredArticles = articles;
	//
	// //filter from data range
	// if(filterDate.from) {
	// 	filteredArticles = filteredArticles.filter((article) => {
	// 	    return Date.parse(article.date) > Date.parse(filterDate.from)
	//         })
	//     }
	//     //filter to data range
	// if(filterDate.to) {
	// 	filteredArticles = filteredArticles.filter((article) => {
	// 		return Date.parse(article.date) < Date.parse(filterDate.to)
	// 	})
	// }
	//
	// //filter by select
	// if (filterSelect.length) {
	//
	// 	filteredArticles = filteredArticles.filter((article) => {
	// 		return filterSelect.includes(article.id);
	// 	});
	//
	// }
	//
	// const articleElements = filteredArticles.map((article) => <li key={article.id}>
	//         <Article
	//             article={article}
	//             isOpen={isOpenItem(article.id)}
	//             toggleOpen={toggleOpenItem(article.id)}/>
	//     </li>);
	//
	// return articleElements;
	//
	// }
}
export default connect((state) => {

	const {filterSelect, filterDates, articles} = state;


	const selection = filterSelect.map((filter) => {
		return filter.value;
	});

	const filterDate = filterDates;

	let filteredArticles = articles;

	//filter from data range
	if(filterDate.from) {
		filteredArticles = filteredArticles.filter((article) => {
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
	if (selection.length) {

		filteredArticles = filteredArticles.filter((article) => {
			return selection.includes(article.id);
		});

	}

	return {filteredArticles};

})(accordion(ArticleList))

ArticleList.propTypes = {
	articles: PropTypes.array.isRequired,
	//from accordion decorator
	isOpenItem: PropTypes.func.isRequired,
	toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
	articles: []
}