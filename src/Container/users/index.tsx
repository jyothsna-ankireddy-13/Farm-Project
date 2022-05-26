import { Tabs } from "antd";
import React, { FC, useState, useContext } from "react";
import { Menu, Dropdown, Button, Space, Checkbox, Select } from "antd";
import style from "./users.module.scss";
import { EmployeeContext } from "../../context/employeeContext";
import Search from "antd/lib/input/Search";
import utils from "../../utils/utils.json";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";
import {
  DownOutlined,
  SettingOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  CaretDownOutlined,
  BarsOutlined,
  ProjectOutlined,
  CarryOutOutlined,
  MailOutlined,
  FieldTimeOutlined,
  DollarOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
const { Option } = Select;
const UsersContainer = (employee:any) => {
  const [employees, setEmployee] = useState<any>([utils]);
  const [selectedEmp, setSelectedEmp] = useState<any>([null]);
  const [options, setOptions] = useState<any>(utils);
  const [popup, setPopup] = useState(false);
  const sortedEmployees = useContext(EmployeeContext);
  const count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const router = useRouter();

  function onSearch(data: any) {
    console.log(`selected ${data}`);
    data = `selected ${data}`;
  }
  function onChange(value: any) {
    let filteredData = employees.filter((emp: any) => emp.id === value);
    setSelectedEmp(filteredData[0]);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  
  return (
    <section className="page">
      <div>
        <Tabs defaultActiveKey="1" className={style.tabs}>
          <TabPane tab="Employee List" key="1">
            <div className={style.tab}>
              <div className={style.left}>
                <Space size={10}>
                  <Select
                    showSearch
                    defaultValue="1"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    style={{ width: 75 }}
                  >
                    {count.map((data: number) => (
                      <Option key={data.toString()}>{data}</Option>
                    ))}
                  </Select>
                  <Select
                    showSearch
                    placeholder="Active Employees"
                    optionFilterProp="children"
                    onChange={(value: any) => onChange(value)}
                    onSearch={onSearch}
                    filterOption={(input: any, option: any) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    style={{ width: 150 }}
                  >
                    {currentEmployees.length &&
                      currentEmployees.map((utils: any) => (
                        <Option value={utils.id}>{utils.employeeName}</Option>
                      ))}
                  </Select>

                  <Search placeholder="Search..." style={{ width: 200 }} />
                </Space>
              </div>
              <div className={style.right}>
                <RotateRightOutlined
                  className={style.setting}
                  style={{ margin: 8 }}
                />
                <RotateLeftOutlined
                  className={style.setting1}
                  style={{ margin: 8 }}
                />
                <SettingOutlined
                  className={style.setting2}
                  style={{ margin: 8 }}
                />
              </div>
            </div>
            <div className="table-container">
              <ul className={`${style.table} table-head`}>
                <li></li>

                <li>
                  Code
                  <SwapOutlined rotate={90} />
                </li>

                <li>
                  First Name <SwapOutlined rotate={90} />
                </li>
                <li>
                  Last Name <SwapOutlined rotate={90} />
                </li>
                <li>
                  Department
                  <SwapOutlined rotate={90} />
                </li>
                <li>More</li>
              </ul>

              {currentEmployees.map((employee: any) => (
                <ul className={`${style.table} table-body`}>
                  <li>
                    <Checkbox></Checkbox>
                  </li>

                  <li>{employee.employeeCode}</li>

                  <li>{employee.firstName}</li>
                  <li>{employee.lastName}</li>
                  <li>{employee.department}</li>

                  <li>
                    <Dropdown
                      trigger={["click"]}
                      overlay={
                        <Menu>
                          <Menu.Item key="1">
                            <ProjectOutlined />
                            Projects
                          </Menu.Item>

                          <Menu.Item key="2">
                            <CarryOutOutlined />
                            Tasks
                          </Menu.Item>

                          <Menu.Item key="3">
                            <MailOutlined />
                            Email Settings
                          </Menu.Item>

                          <Menu.Item key="4">
                            <FieldTimeOutlined />
                            Time Off/Leave Policy
                          </Menu.Item>
                          <Menu.Item key="5">
                            <DollarOutlined />
                            Billing/Costing Rates
                          </Menu.Item>
                          <Menu.Item
                            key="6"
                            onClick={() =>
                              router.push(`${ROUTES.USERS.EDIT}?id=${employee.id}`)
                            }
                          >
                            <EditOutlined />
                            Edit
                          </Menu.Item>
                        </Menu>
                      }
                    >
                      <BarsOutlined />
                    </Dropdown>
                  </li>
                </ul>
              ))}
            </div>
          </TabPane>
          <TabPane tab="Add Employee" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Settings" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </section>
  );
};

export default UsersContainer;
