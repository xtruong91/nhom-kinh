import TaskBoard from '../containers/TaskBoard';
import Admin from '../containers/Admin';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Home from '../containers/Home';
export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Trang Chủ',
    exact: true,
    component: Admin
  },
  {
    path: '/admin/task-board',
    name: 'Danh Sách Công Việc',
    component: TaskBoard,
    exact: true
  }
];

export const ROUTES = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    name: 'Đăng Nhập',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Đăng Ký',
    component: SignUp
  }
];

export const STATUSES = [
  {
    value: 0,
    label: 'READY'
  },
  {
    value: 1,
    label: 'INPROGRESS'
  },
  {
    value: 2,
    label: 'COMPLETED'
  }
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};

export const API_ENDPOINT = 'http://139.180.137.150:3000/api';
export const AUTHORIZATION_KEY = 'TOKEN';
