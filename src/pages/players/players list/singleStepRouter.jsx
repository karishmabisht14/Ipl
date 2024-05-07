import { Form, Modal } from 'antd'
import { useRef, useState } from 'react'

import { ExclamationCircleFilled } from "@ant-design/icons";
import CreateUpdatePlayer from './CreateUpdatePlayer'
import PlayerListPage from './PlayersListPage'
import { removePlayer } from '../../../services/players/players';
import moment from 'moment';
export const SingleStepRouter = ({ next, setSelectedPlayer }) => {

    const [updatedCount, setUpdatedCount] = useState(0)

    const payload = useRef({
        operation: '',
        data: {}
    })
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const onDelete = (deleteId) => {
        // console.log("rec" ,deleteId)
        Modal.confirm({
            title: "Are you sure delete this task?",
            icon: <ExclamationCircleFilled />,
            okText: "Yes",
            cancelText: "No",
            onOk: () => {
                removePlayer(deleteId, "playerId").then(() => {
                    setUpdatedCount(updatedCount + 1)
                    //   console.log('gotttt', )
                });
            },
            onCancel() {
                // console.log("Cancel");
            },
        });
    };


    const [form] = Form.useForm()
    const initFormData = () => {
        if (payload.current.data)
            payload.current.data = {
                ...payload.current.data, dob: moment(payload.current.data.dob, 'YYYY-MM-DD'),
                iplDebut: moment(payload.current.data.iplDebut, 'YYYY')
            }
        // console.log('initFormData', payload.current.data)
        payload.current.data
            ? form.setFieldsValue(payload.current.data)
            : form.resetFields()
    }
    return (
        <>
            {open &&
                <CreateUpdatePlayer
                    payload={payload}
                    form={form}
                    playerUpdated={updatedCount => {
                        setOpen(false)
                        setUpdatedCount(updatedCount + 1)
                    }}
                    handleCancel={handleCancel}
                />
            }
            {
                <PlayerListPage
                    payload={payload}
                    next={next}
                    setSelectedPlayer={setSelectedPlayer}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}
                    onDelete={onDelete}

                />
            }
        </>
    )
}
