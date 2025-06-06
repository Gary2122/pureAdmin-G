/*
 * @Descripttion:
 * @version:
 * @Author: Garrison
 * @Date: 2025-06-05 16:09:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2025-06-05 16:17:27
 */
import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

// 最简代码，也就是这些字段必须有
export default {
  path: "/exam",
  meta: {
    title: $t("menus.pureExam")
  },
  children: [
    {
      path: "/exam/list",
      name: "exam",
      component: () => import("@/views/exam/index.vue"),
      meta: {
        title: "比赛列表"
      }
    },
    {
      path: "/exam/addExam",
      name: "AddExam",
      component: () => import("@/views/exam/addExam.vue"),
      meta: {
        title: "创建比赛"
      }
    },
    {
      path: "/exam/examDetail",
      name: "ExamDetail",
      component: () => import("@/views/exam/examDetail.vue"),
      meta: {
        title: "创建比赛",
        showLink: false
      }
    },
    {
      path: "/exam/problemsList",
      name: "problemsList",
      component: () => import("@/views/exam/problemsList.vue"),
      meta: {
        title: "创建比赛",
        showLink: false
      }
    }
  ]
} satisfies RouteConfigsTable;
