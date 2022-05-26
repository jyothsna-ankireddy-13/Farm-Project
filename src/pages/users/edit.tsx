import React from 'react';
import LayoutBar from '../../components/layout';
import EditEmployeeContainer from '../../Container/users/edit';

const EditEmployee = () => {
  return (
    <LayoutBar title='Edit Employee'>
      <EditEmployeeContainer />
    </LayoutBar>
  );
}

export default EditEmployee;
