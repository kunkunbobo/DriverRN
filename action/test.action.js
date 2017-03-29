/**
 * Created by yzw on 2017/2/13.
 */
export const TEST_ACTION = 'TEST_ACTION';

export function testAction() {
    return dispatch => {
        dispatch({
            type: TEST_ACTION,
        });
    }
}
