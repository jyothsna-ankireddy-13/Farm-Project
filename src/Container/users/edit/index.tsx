import React, { useEffect, useState } from "react";
import EmpdetailsForm from "../empdetails_form";
import style from "./edituser.module.scss";
import { useRouter } from "next/router";
import { ROUTES } from "../../../constants/routes";

const EditEmployeeContainer = () => {
  const [initial, setInitial] = useState<any>({});
  const router = useRouter();
  
  
  const setInitialValues = async (id: any) => {
    let filter = {
      fields: [
        {
          field: "id",
          values: {
            [id]: "1",
          },
        },
      ],
    };
    const res: any = await ROUTES.get(ROUTES.USERS.LIST, filter);
  if (res.status === 1 && res.info.length > 0) {
    let data = res.info[0];
    setInitial({
      id: data.id,
      firstName: data.firstName,
      lastNmae: data.lastName,
      code: data.code,
      department: data.department,
      role: data.role,
      email: data.email,
      password: data.password,
      hireDate: data.hireDate,
      terminationDate: data.terminationDate,
      eSignature: data.eSignature,
      acces: data.access,
      language: data.language,
    });
  }
  }
  return (
    <section className="page">
      {<EmpdetailsForm initial={initial}></EmpdetailsForm>}
    </section>
  );
};

export default EditEmployeeContainer;
