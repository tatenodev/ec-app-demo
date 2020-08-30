import LoginClass from '../templates/LoginClass';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../reducks/users/operations';

const mapStateToProps = state => {
	return {
		// 渡したいstateだけをオブジェクト型で記述
		users: state.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			signIn(){
				//StoreからDispatchする関数
				dispatch(Actions.signIn())
			}
		}
	}
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(LoginClass);
