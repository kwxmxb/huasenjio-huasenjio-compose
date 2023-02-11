/*
 * @Autor: huasenjio
 * @Date: 2022-10-01 10:38:33
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-02-04 14:34:49
 * @Description: 初始化管理员账号
 */

const CONFIG = require('../../config.js');

global.huasen.working(
  [
    {
      schemaName: 'Manage',
      methodName: 'init',
      payloads: [
        {
          id: CONFIG.ADMIN.id,
          password: CONFIG.ADMIN.password,
        },
      ],
      self: true,
    },
  ],
  data => {
    if (data) {
      console.log('初始化管理员完成：', data);
    }
  },
);
