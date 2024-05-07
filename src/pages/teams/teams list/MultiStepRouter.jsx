import { Form, Modal } from 'antd'
import { useRef, useState } from 'react'
import TeamListPage from "./TeamListPage";
import StepForm1 from './StepForm1';
import { ExclamationCircleFilled } from "@ant-design/icons";
import { removeTeam } from '../../../services/teams/teams';
export const MultiStepRouter = ({ next, setSelectedTeam, teams, updatedCount, setUpdatedCount }) => {



    const [isModalOpen1, setIsModalOpen1] = useState(false);
    // const [isModalOpen2, setIsModalOpen2] = useState(false);

    const [form] = Form.useForm();

    const payload = useRef({
        operation: '',
        data: {}
    })

    const initFormData = () => {
        // console.log("pay", payload.current.data)
        payload.current.data.team_id
            ? form.setFieldsValue(payload.current.data)
            : form.resetFields()
    }

    const showModal1 = () => {
        setIsModalOpen1(true);
    };

    const handleOk1 = () => {
        // setIsModalOpen2(true);
        setIsModalOpen1(false);
    };

    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };

    // const handleOk2 = () => {
    //     setIsModalOpen2(false);
    // };

    // const handleCancel2 = () => {
    //     setIsModalOpen2(false);
    //     setIsModalOpen1(true);
    // };
    const onDelete = (deleteId) => {
        // console.log("delete" ,deleteId)
        Modal.confirm({
            title: "Are you sure delete this task?",
            icon: <ExclamationCircleFilled />,
            okText: "Yes",
            cancelText: "No",
            onOk: () => {
                removeTeam(deleteId).then(() => {
                    setUpdatedCount(updatedCount + 1)
                });
            },
            onCancel() {
                // console.log("Cancel");
            },
        });
    };
    //   console.log(updatedCount);


    return (
        <>

            <StepForm1
                isModalOpen={isModalOpen1}
                handleCancel={handleCancel1}
                handleOk={handleOk1}
                form={form}
                payload={payload}
                setUpdatedCount={setUpdatedCount}
            />

            {/* <StepForm2
                isModalOpen={isModalOpen2}
                handleCancel={handleCancel2}
                handleOk={handleOk2}
                form={form}
                payload={payload}
                setUpdatedCount = {setUpdatedCount}

            /> */}


            <TeamListPage
                payload={payload}
                next={next}
                setSelectedTeam={setSelectedTeam}
                initFormData={initFormData}
                updatedCount={updatedCount}
                showModal={showModal1}
                onDelete={onDelete}
                teams={teams}

            />



        </>
    )
}
export default MultiStepRouter
