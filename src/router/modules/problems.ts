import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

// 最简代码，也就是这些字段必须有
export default {
  path: "/problems",
  meta: {
    title: $t("menus.pureProblems")
  },
  children: [
    {
      path: "/problems/list",
      name: "List",
      component: () => import("@/views/problems/index.vue"),
      meta: {
        title: "问题列表"
      }
    },
    {
      path: "/problems/addProblem",
      name: "AddProblem",
      component: () => import("@/views/problems/addProblem.vue"),
      meta: {
        title: "添加题目"
      }
    }
  ]
} satisfies RouteConfigsTable;
