import Vue from "vue";
import Router from "vue-router";

//--admin
import HelloWorld from "@/components/HelloWorld";
import MemberManagement from "@/views/admin/MemberManagement/MemberManagement";
import adminSignIn from "@/views/admin/signIn";
import adminSignUp from "@/views/admin/signUp";
import AdminOrder from "@/views/admin/AdminOrder/AdminOrder";

//--service
import signIn from "@/views/store/SignIn";
import home from "@/views/store/mainPage";

//--service_signup
import signUp from "@/views/store/signupprocess/signUp";
import getInfo from "@/views/store/signupprocess/getInfo";
import thirdStep from "@/views/store/signupprocess/thirdStep";
//--service_product_detail
import productsDetail from "@/views/store/products/productsDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      meta: { admin: false }
    },
    {
      path: "/signIn",
      name: "signIn",
      component: signIn,
      meta: { admin: false }
    },
    {
      path: "/signUp",
      name: "signUp",
      component: signUp,
      meta: { admin: false }
    },
    {
      path: "/getInfo",
      name: "getInfo",
      component: getInfo,
      meta: { admin: false }
    },
    {
      path: "/thirdStep",
      name: "thirdStep",
      component: thirdStep,
      meta: { admin: false }
    },
    {
      path: "/detail",
      name: "productsDetail",
      component: productsDetail,
      meta: { admin: false }
    },
    {
      path: "/admin/seller",
      name: "seller",
      component: MemberManagement,
      meta: { admin: true }
    },
    {
      path: "/admin/signin",
      name: "adminSignIn",
      component: adminSignIn
    },
    {
      path: "/admin/signup",
      name: "signUp",
      component: adminSignUp
    },
    {
      path: "/admin/order",
      name: "AdminOrder",
      component: AdminOrder, //<=== admin home component 추가해야함
      meta: { admin: true }
    }
  ]
});
