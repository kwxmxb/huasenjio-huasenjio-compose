/*
 * @Autor: huasenjio
 * @Date: 2022-12-03 16:36:38
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-02-02 21:41:35
 * @Description: 调用子线程进行IO密集型任务
 */

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

/**
 * 主线程执行回调
 * @param {Object} data 格式 {tag: "调用的方法名"}
 * @returns
 */
const runWorker = data => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, {
      workerData: data,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

if (isMainThread) {
  // 主进程执行代码段
  module.exports = {
    runWorker,
  };
} else {
  // 子进程执行代码段，并且无法共享主进程的状态和变量
  try {
    let result = {};
    // 解析传递的参数
    let { access } = workerData;

    let routerPath = ['/user/', '/manage/', '/article/', '/file/', '/blacklist/', '/take/', '/mail/', '/record/', '/public/webapp/', '/huasen-store/', '/favicon.ico'];

    let traces = [];
    let dubious = [];

    let refererSet = new Set();
    let hostSet = new Set();

    let operateMap = {
      '/manage/login': '后台管理登录',
      '/manage/upload': '文件上传',
      '/manage/uploadIcon': '站点图标上传',
      // '/manage/add': '新增管理员',
      // '/manage/findByPage': '分页查看管理员',
      '/manage/remove': '移除管理员',
      '/manage/update': '更新管理员信息',

      // '/file/findAll': '查看所有文件',
      '/file/remove': '移除文件',

      '/record/add': '添加日志',
      // '/record/findByPage': '分页查看日志',
      '/record/remove': '删除日志',

      '/article/add': '添加文章',
      // '/article/findByPage': '分页查看文章',
      '/article/remove': '移除文章',
      '/article/update': '更新文章',

      '/user/add': '添加用户',
      // '/user/findByPage': '分页查看用户',
      '/user/remove': '移除用户',
      '/user/update': '更新用户',

      '/take/add': '添加订阅',
      // '/take/findByPage': '分页查看订阅',
      '/take/remove': '移除订阅',
      '/take/update': '更新订阅',

      // '/blacklist/findByPage': '分页查看黑名单',
      '/blacklist/remove': '删除黑名单',
      '/blacklist/add': '新增黑名单',
    };

    let ipMap = {};

    let userPV = 0;
    let managePV = 0;
    let otherPV = 0;

    access.map(item => {
      let log = JSON.parse(item);
      // 记录PV
      if (log.dot == 'user') {
        userPV++;
      } else if (log.dot == 'manage') {
        managePV++;
      } else {
        otherPV++;
      }
      // 记录UV
      ipMap[log.ip] = ipMap[log.ip] ? ipMap[log.ip] + 1 : 1;
      // 记录referer
      refererSet.add(log.referer);
      // 记录host
      hostSet.add(log.host);
      // 记录可疑请求
      let exit = routerPath.find(path => log.url.includes(path));
      if (!exit) dubious.push(log);
      // 操作记录留痕
      if (operateMap[log.url]) {
        traces.push({
          ...log,
          operateName: operateMap[log.url],
        });
      }
    });

    let referers = Array.from(refererSet);
    let hosts = Array.from(hostSet);

    result = {
      userPV,
      managePV,
      otherPV,

      traces,
      dubious,
      referers,
      hosts,

      ipMap,
    };
    // 通知主进程传递计算后数据
    parentPort.postMessage(result);
  } catch (err) {
    console.error('子线程计算出错', err);
    parentPort.postMessage({});
  }
}
