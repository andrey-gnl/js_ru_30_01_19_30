import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import DateRange from './DateRange'
import Select from './Select'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        user: '',
    }

    render() {
        const {articles, selection, dates, visibleArticles} = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>

                <Select options = {options} selection = {selection} />

                <DateRange from={dates.from} to={dates.to}/>
                <ArticleList articles={articles}  updateFilters={this.updateFilters}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }

}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    selection: state.filterSelect,
    dates: state.filterDates
}))(App)