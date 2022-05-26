import React, { ReactNode, useEffect, useState } from "react";
import AppHeader from "../app-header";
import { Layout, Menu } from "antd";
import style from "./layout.module.scss";
import { useRouter } from "next/router";
import { SIDE_MENUS_CUSTOM } from "../../constants/routes";
import Head from "next/head";


type LayoutProps = {
  children?: ReactNode;
  title?: string;
};
const LayoutBar = ({ children, title }: LayoutProps) => {
  const [active, setActive] = useState<any>([]);
  const { Sider } = Layout;
  const router = useRouter();
 
  const openPage = (page: any) => {
    router.push(page);
  };
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Sider theme="dark" className={style.sider}>
        <div style={{ padding: 20 }} className={style.logoname}>
          POULTRY FARM
        </div>
        <Menu
          theme="dark"
          mode="inline"
          key={active}
          defaultOpenKeys={active}
          defaultSelectedKeys={active}
        >
          {SIDE_MENUS_CUSTOM.map((menu: any)=>{
              if(menu.access && menu.access.length > 0){
                
                return <Menu.Item key={menu.key} icon={menu.icon} title={menu.label} onClick={(index) => openPage(menu.url)}>
                  {menu.label}
                </Menu.Item>
              }
              else if(menu.access === 'All'){
                return <Menu.Item key={menu.key} icon={menu.icon} title={menu.label} onClick={(index) => openPage(menu.url)}>
                {menu.label}
              </Menu.Item>
              }
            })}
        </Menu>
      </Sider>
      <div className={style.layoutcontent}>
        <div className={style.layoutheader}>
          <AppHeader pagetitle={title}></AppHeader>
        </div>
        <div className={style.layoutdata}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutBar;
