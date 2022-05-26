import {
  DashboardOutlined,
  TeamOutlined,
  WalletOutlined,
  CheckCircleOutlined,
  CarryOutOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  ScheduleOutlined,
  ProjectOutlined,
  CalendarOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

export const ROUTES = {
  DASHBOARD: {
    LIST: "/dashboard",
  },
  CLIENTS: {
    LIST: "/clients",
  },
  PROJECTS: {
    LIST: "/projects",
  },
  TASKS: {
    LIST: "/tasks",
  },
  ATTENDANCE: {
    LIST: "/attendance",
  },
  TIMESHEET: {
    LIST: "/timesheet",
  },

  LEAVES: {
    LIST: "/leave",
  },
  EXPENCES: {
    LIST: "/expences",
  },
  BILLING: {
    LIST: "/billing",
  },
  REPORTS: {
    LIST: "/reports",
  },
  APPROVALS: {
    LIST: "/approvals",
  },
  SETTINGS: {
    LIST: "/settings",
  },
  USERS: {
    LIST: "/users",

    EDIT: "/users/edit",
  },
};

export const SIDE_MENUS_CUSTOM: any = [
  {
    label: "Dashboard",
    key: "1",
    icon: <DashboardOutlined />,
    url: ROUTES.DASHBOARD.LIST,
    access: "All",
  },
  {
    label: "Users",
    key: "2",
    url: ROUTES.USERS.LIST,
    icon: <TeamOutlined />,
    access: "All",
  },
  {
    label: "Clients",
    key: "3",
    icon: <UsergroupAddOutlined />,
    url: ROUTES.CLIENTS.LIST,
    access: "All",
  },
  {
    label: "Projects",
    key: "4",
    url: ROUTES.PROJECTS.LIST,
    icon: <ProjectOutlined />,
    access: "All",
  },
  {
    label: "Tasks",
    key: "5",
    url: ROUTES.TASKS.LIST,
    icon: <CarryOutOutlined />,
    access: "All",
  },
  {
    label: "Attendance",
    key: "6",
    url: ROUTES.ATTENDANCE.LIST,
    icon: <ScheduleOutlined />,
    access: "All",
  },
  {
    label: "Timesheet",
    key: "7",
    url: ROUTES.TIMESHEET.LIST,
    icon: <ScheduleOutlined />,
    access: "All",
  },
  {
    label: "Leaves/Timeoff",
    key: "8",
    url: ROUTES.LEAVES.LIST,
    icon: <CalendarOutlined />,
    access: "All",
  },
  {
    label: "Expences",
    key: "9",
    url: ROUTES.EXPENCES.LIST,
    icon: <WalletOutlined />,
    access: "All",
  },
  {
    label: "Billing",
    key: "10",
    url: ROUTES.BILLING.LIST,
    icon: <ProfileOutlined />,
    access: "All",
  },
  {
    label: "Reports",
    key: "11",
    url: ROUTES.REPORTS.LIST,
    icon: <FundProjectionScreenOutlined />,
    access: "All",
  },
  {
    label: "Approvals",
    key: "12",
    url: ROUTES.APPROVALS.LIST,
    icon: <CheckCircleOutlined />,
    access: "All",
  },
  {
    label: "Other Settings",
    key: "13",
    url: ROUTES.SETTINGS.LIST,
    icon: <SettingOutlined />,
    access: "All",
  },
];
