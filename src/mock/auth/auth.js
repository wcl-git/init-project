/**
 * json-server npm包不支持 es6 的 import 和 export  export default, 文件
*/
module.exports = {
  code: '2000',
  message: '成功',
  data: {
    menuList: [
      { path: 'unmannedInspection', des: '无人巡检' },
      { path: 'dashboard', des: '工况看板' },
      { path: 'recheck', des: '联动复核' },
      {
        path: 'statistics',
        des: '数据统计',
        children: [{ path: 'allStatistics', des: '全站统计' }, { path: 'oneStatistics', des: '分站统计' }],
      },
      {
        path: 'record',
        des: '历史记录',
        children: [{ path: 'exceptionRecord', des: '异常事件记录' }, { path: 'taskRecord', des: '任务记录' }],
      },
      { path: 'system', des: '系统设置' },
    ],
    powerList: [
      { path: 'unmannedInspection', des: '无人巡检' },
      { path: 'dashboard', des: '工况看板' },
      { path: 'recheck', des: '联动复核' },
      {
        path: 'statistics',
        des: '数据统计',
        children: [{ path: 'allStatistics', des: '全站统计' }, { path: 'oneStatistics', des: '分站统计' }],
      },
      {
        path: 'record',
        des: '历史记录',
        children: [{ path: 'exceptionRecord', des: '异常事件记录' }, { path: 'taskRecord', des: '任务记录' }],
      },
      { path: 'system', des: '系统设置' },
    ],
  },
};
