import React, { FC, useState } from "react";
import style from "./appheader.module.scss";
import {
  QuestionCircleOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";
type HeaderProps = {
  pagetitle?: string;
};

const AppHeader: FC<HeaderProps> = ({ pagetitle }: HeaderProps) => {
  const [popup, setPopup] = useState(false);

  const toggleMenu = (status: boolean) => {
    setPopup(status);
  };

  return (
    <div className={style.header}>
      <div className={style.title}>{pagetitle}</div>
      <div className={style.user}>
        <div className={style.notification}>{<QuestionCircleOutlined />}</div>
        <div className={style.notification}>{<BellOutlined />}</div>
        <div className={style.notification} onClick={() => toggleMenu(true)}>
          {<UserOutlined />}
        </div>
      </div>

      {popup && (
        <div className={style.popupcontainer}>
          <div
            className={style.overlay}
            onClick={() => toggleMenu(false)}
          ></div>
          <div className={style.popup}>
            {/* <div className={style.table}>
            </div> */}
            <div className={style.table}>
              <div className={style.name}>user Name</div>
              <div className={style.role}>role</div>
            </div>
            <ul className={style.menu}>
              <li>Change Password</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
