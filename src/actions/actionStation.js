
export const SET_STATION_LIST = 'SET_STATION_LIST'; // 获取变电站列表
export const SET_CURRENT_STATION = 'SET_CURRENT_STATION'; // 设置当前变电站
/**
 * 设置变电站列表
 * @param stationList 变电站列表data
 */
export function setStationList(stationList = []) {
  return {
    type: SET_STATION_LIST,
    data: stationList,
  };
}
/**
 * 设置当前变电站
 * @param stationId 当前变电站id
 */
export function setCurrentStation(currentStation) {
  return {
    type: SET_CURRENT_STATION,
    data: currentStation,
  };
}
