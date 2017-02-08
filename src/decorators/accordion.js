

//почему без этой строки в react tools  выводит CommentsList? http://take.ms/ILpkh
// WrappedComponent.displayName = 'WrappedComponent';
// return WrappedComponent;

//HOC - Higher Order Component === decorator
import React, {Component} from 'react'


export default (Component) => {
	class Accordion extends Component {
		state = {
			openBlockId: null
		}

		toggleOpenBlock = openBlockId => ev => {
			ev && ev.preventDefault && ev.preventDefault()
			this.setState({
				openBlockId: this.state.openBlockId == openBlockId ? null : openBlockId
			})
		}

		render() {
			return <Component {...this.props} {...this.state} toggleOpenBlock={this.toggleOpenBlock}/>
		}
	}
	//почему без этой строки в react tools  выводит CommentsList? http://take.ms/ILpkh (в этом случае  ArticleList в ArticleList)
	Accordion.displayName = 'Accordion';
	return Accordion;
}