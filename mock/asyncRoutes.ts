/*
 * @Descripttion:
 * @version:
 * @Author: Garrison
 * @Date: 2025-06-05 15:20:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2025-06-05 19:50:15
 */
// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { system, monitor, permission, frame, tabs } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const systemManagementRouter = {
  path: "/system",
  meta: {
    icon: "ri:settings-3-line",
    title: "menus.pureSysManagement",
    rank: system
  },
  children: []
};

const systemMonitorRouter = {
  path: "/monitor",
  meta: {
    icon: "ep:monitor",
    title: "menus.pureSysMonitor",
    rank: monitor
  },
  children: []
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.purePermission",
    icon: "ep:lollipop",
    rank: permission
  },
  children: []
};

const frameRouter = {
  path: "/iframe",
  meta: {
    icon: "ri:links-fill",
    title: "menus.pureExternalPage",
    rank: frame
  },
  children: []
};

const tabsRouter = {
  path: "/tabs",
  meta: {
    icon: "ri:bookmark-2-line",
    title: "menus.pureTabs",
    rank: tabs
  },
  children: []
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          systemManagementRouter,
          systemMonitorRouter,
          permissionRouter,
          frameRouter,
          tabsRouter
        ]
      };
    }
  }
]);
