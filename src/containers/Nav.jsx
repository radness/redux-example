import Nav from '../components/Nav';
import { connect } from 'react-redux';

export default connect(

    // connect 컴포넌트의 인자는 2개
    // 1. state를 인자로 가지는 함수
    // 2. dispatch를 인자로 가지는 함수
    function (state) {
        return { data: state.contents }
    },
    function (dispatch) {
        return {
            onClick: function (id) {
                dispatch({ type: 'READ', id: id })
            }
        }
    }
)(Nav);