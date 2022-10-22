import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Signup from "../views/Signup.vue";
import Login from "../components/login.vue";
import Events from "../views/Events.vue";
import Chats from "../views/Chats.vue";
import ChatRoom from "../views/ChatRoom.vue";
import Profile from "../views/Profile.vue"
import signupFinalised from "../components/signupFinalised.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/chats",
    name: "Chats",
    component: Chats,
  },
  {
    path: "/chats/:id",
    name: "Chatroom",
    component: ChatRoom,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signupFinal",
    name: "signupFinalised",
    component: signupFinalised,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
