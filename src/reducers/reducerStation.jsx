
import * as actions from 'actions/actionStation';

/**
 * 设置所有电站列表
 * @param state 默认的电站列表
 * @param action
 */
export function stationList(state = [], action) {
  switch (action.type) {
    case actions.SET_STATION_LIST:
      return [...action.data];
    default:
      return state;
  }
}
/**
 * 设置当前变电站id
 * @param state 当前变电站id
 * @param action
 */
export function currentStation(state = { id: '', name: '', type: '' }, action) {
  switch (action.type) {
    case actions.SET_CURRENT_STATION:
      return action.data;
    default:
      return state;
  }
}
