//HOC - Higher Order Component === decorator
import React, {Component} from 'react'


export default (Component) => {
    class WrappedComponent extends Component {

        state = {
            isOpen: false
        }

        toggleOpen = (ev) => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render() {
            return (
                <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
            )
        }
    }

    //почему без этой строки в react tools  выводит CommentsList? http://take.ms/ILpkh
    WrappedComponent.displayName = 'WrappedComponent';
    return WrappedComponent;
}














// export default (Component) => class WrappedComponent extends React.Component {
//     state = {
//         isOpen: false
//     }
//
//     toggleOpen = (ev) => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
//
//     render() {
//         return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
//     }
// }