import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

// 最简代码，也就是这些字段必须有
export default {
  path: "/commonsetting",
  meta: {
    title: $t("menus.pureCommonSetting")
  },
  children: [
    {
      path: "/commonsetting/index",
      name: "Commonsetting",
      component: () => import("@/views/commonsetting/index.vue"),
      meta: {
        title: "用户管理"
      }
    },
    {
      path: "/commonsetting/config",
      name: "Config",
      component: () => import("@/views/commonsetting/config.vue"),
      meta: {
        title: "系统配置"
      }
    },
    {
      path: "/commonsetting/serverJudge",
      name: "ServerJudge",
      component: () => import("@/views/commonsetting/serverJudge.vue"),
      meta: {
        title: "判题服务器"
      }
    },
    {
      path: "/commonsetting/testCase",
      name: "TestCase",
      component: () => import("@/views/commonsetting/testCase.vue"),
      meta: {
        title: "测试用例"
      }
    }
  ]
} satisfies RouteConfigsTable;
