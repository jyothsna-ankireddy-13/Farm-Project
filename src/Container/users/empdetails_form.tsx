import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Tabs,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Select,
  InputNumber,
  Typography,
  Switch,
} from "antd";

import {
  InfoCircleOutlined,
  SolutionOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  UndoOutlined,
  CloudUploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./edit/edituser.module.scss";
import router from "next/router";

const { TabPane } = Tabs;

const EmpdetailsForm: FC<any> = ({ initial }) => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const [employees, setEmployee] = useState<any>([]);
  useEffect(() => {
    form.setFieldsValue({
      firstName: initial.firstName,
      lastName: initial.lastName,
      code: initial.code,
      role: initial.role,
      department: initial.department,
      email: initial.email ? initial.email : null,
      password: initial.password ? initial.password : null,
      hireDate: initial.hireDate ? initial.hireDate : null,
      terminationDate: initial.terminationDate ? initial.terminationDate : null,
      eSignature: initial.eSignature ? initial.eSignature : null,
      acces: initial.access ? initial.access : null,
      language: initial.language ? initial.language : null,
    });
  }, []);

  return (
    <div className="form">
      <Tabs defaultActiveKey="1">
        <TabPane tab="EDIT EMPLOYEE" key="1">
          <Tabs defaultActiveKey="1" type="card" size="large">
            <TabPane
              tab={
                <span>
                  <QuestionCircleOutlined />
                  QUICK INFO
                </span>
              }
              key="1"
            >
              <div className={style.cards}>
                <Card style={{ width: 500 }} className={style.card}>
                  <Form layout="vertical">
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="firstName"
                          label="First Name"
                          rules={[
                            {
                              required: true,
                              message: "First Name required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="lastName"
                          label="Last Name"
                          rules={[
                            {
                              required: true,
                              message: "Last Name required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "email required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
                <Card style={{ width: 500 }} className={style.card}>
                  <Form layout="vertical">
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          label="Role"
                          name="role"
                          rules={[
                            {
                              required: true,
                              message: "role required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Space direction="vertical" style={{ width: "100%" }}>
                            <Select
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              defaultValue="Admin"
                              className={style.select}
                            >
                              {employees.length &&
                                employees.map((utils: any) => (
                                  <Option value={utils.id}>
                                    {utils.jobTitle}
                                  </Option>
                                ))}
                            </Select>
                          </Space>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "password required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <Typography className={style.generate}>
                            Generate Password
                          </Typography>
                          <div className={style.pswd}>
                            <Typography>Password Change</Typography>
                            <Switch className={style.switch} />
                          </div>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <InfoCircleOutlined />
                  OFFICIAL INFO
                </span>
              }
              key="2"
            >
              Content of card tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <SolutionOutlined />
                  PERSONAL INFO
                </span>
              }
              key="3"
            >
              Content of card tab 3
            </TabPane>
            <TabPane
              tab={
                <span>
                  <CalendarOutlined />
                  DATES
                </span>
              }
              key="4"
            >
              <div className={style.cards}>
                <Card style={{ width: 500 }} className={style.card}>
                  <Form layout="vertical">
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="hireDate"
                          label="Hire Date"
                          rules={[
                            {
                              required: true,
                              message: "Hire Date is required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="terminationDate"
                          label="Termination Date"
                          rules={[
                            {
                              required: true,
                              message: "Termination Date is required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="dob"
                          label="Date Of Birth"
                          rules={[
                            {
                              required: true,
                              message: "DOB is required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
                <Card style={{ width: 500 }} className={style.card}>
                  <Form layout="vertical">
                    <Row>
                      <Col span={12}>
                        <Form.Item name="user" style={{ width: 450 }}>
                          <div className={style.user}>{<UserOutlined />}</div>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          label="Electronic Signature"
                          name="eSignature"
                          rules={[
                            {
                              required: true,
                              message: "Signature is required",
                            },
                          ]}
                          style={{ width: 450 }}
                          tooltip={{
                            title: "Upload",
                            icon: <CloudUploadOutlined />,
                          }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="access"
                          label="Access from IPs"
                          rules={[
                            {
                              required: true,
                              message: "IP is required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          label="User Interface Language"
                          name="language"
                          rules={[
                            {
                              required: true,
                              message: "Language is required",
                            },
                          ]}
                          style={{ width: 450 }}
                        >
                          <Space direction="vertical" style={{ width: "100%" }}>
                            <Select
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              defaultValue="English(United States)"
                            >
                              {employees.length &&
                                employees.map((utils: any) => (
                                  <Option value={utils.id}>
                                    {utils.language}
                                  </Option>
                                ))}
                            </Select>
                          </Space>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <div className={style.pswd}>
                            <Typography>Disable</Typography>
                            <Switch className={style.switch} />
                          </div>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </div>
            </TabPane>
          </Tabs>
          <div className={style.buttons}>
            <Space size={12}>
              <Button>CANCEL</Button>
              <Button>
                <UndoOutlined />
                UPDATE
              </Button>
            </Space>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default EmpdetailsForm;
