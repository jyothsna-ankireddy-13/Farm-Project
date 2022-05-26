import {
  DashboardOutlined,
  TeamOutlined,
  ProjectOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

export const ROUTES = {
  FEED: {
    LIST: "/feed",
  },
  FLOCK: {
    LIST: "/flock",
  },
  MEDICINE: {
    LIST: "/medicine",
  },
  PRODUCTION: {
    LIST: "/production",
  },
  REPORTS: {
    LIST: "/reports",
  },
  
};

export const SIDE_MENUS_CUSTOM: any = [
  {
    label: "FEED",
    key: "1",
    icon: <DashboardOutlined />,
    url: ROUTES.FEED.LIST,
    access: "All",
  },
  {
    label: "FLOCK",
    key: "2",
    url: ROUTES.FLOCK.LIST,
    icon: <TeamOutlined />,
    access: "All",
  },
  {
    label: "MEDICINE",
    key: "3",
    icon: <UsergroupAddOutlined />,
    url: ROUTES.MEDICINE.LIST,
    access: "All",
  },
  {
    label: "PRODUCTION",
    key: "4",
    url: ROUTES.PRODUCTION.LIST,
    icon: <ProjectOutlined />,
    access: "All",
  },
  
];
