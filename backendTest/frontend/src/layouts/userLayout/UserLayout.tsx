import React, { PropsWithChildren } from "react";
import styles from "./UserLayout.module.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

export const UserLayout: React.FC<PropsWithChildren<unknown>> = (props) => {
   const menuItems = [

        {
            key: 'Chinese',
            label: '中文',
        },
        {
            key: 'English',
            label: 'English',
        },
    ];
    
  const menu = (
    <Menu items={menuItems} />
  );

  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              Language <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
              <span className={styles["title"]}>This is for testing</span>
          </div>
          <div className={styles["desc"]}>
            Please try to login here
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};
