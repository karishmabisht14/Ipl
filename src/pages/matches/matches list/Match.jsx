import MatchDetail from "./MatchDetail";
import { Col, Row, Divider, Button, Tooltip } from "antd";
import MatchResult from "./MatchResult";
import { useState } from "react";
import PermissionButton from "../../../auth/PermissionButton";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const Match = ({
  match,
  initCreateUpdate,
  handleDelete,
  initCompleteMatch,
}) => {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  return (
    <>
      <Row>
        <Col span={21}>
          <MatchDetail key={match.match_id} match={match} />
        </Col>
        <Col span={3}>
          {match.status === "completed" ? (
            <MatchResult
              match={match}
              isResultModalOpen={isResultModalOpen}
              setIsResultModalOpen={setIsResultModalOpen}
            />
          ) : (
            <>
              <div style={{ marginTop: "47px", marginLeft: "-50px" }}>
                {" "}
                <Tooltip
                  placement="bottom"
                  title="Edit"
                  color="rgb(239, 65, 35)"
                >
                  <PermissionButton allowedPermissions={["addMatch"]}>
                    <Button
                      className="editBtn"
                      onClick={() => initCreateUpdate(match.match_id)}
                      style={{
                        backgroundColor: "rgb(229, 231, 233)",
                        borderColor: "rgb(229, 231, 233)",
                        borderRadius: "50%",
                        marginRight: "5px",
                      }}
                    >
                      <EditOutlined />
                    </Button>
                  </PermissionButton>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title="Delete"
                  color="rgb(239, 65, 35)"
                >
                  {" "}
                  <PermissionButton allowedPermissions={["addMatch"]}>
                    <Button
                      className="deleteBtn"
                      onClick={() => handleDelete(match.match_id)}
                      style={{
                        backgroundColor: "rgb(229, 231, 233)",
                        borderColor: "rgb(229, 231, 233)",
                        borderRadius: "50%",
                        marginRight: "4px",
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </PermissionButton>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title="Completed"
                  color="rgb(239, 65, 35)"
                >
                  {" "}
                  <PermissionButton allowedPermissions={["completeMatch"]}>
                    <Button
                      className="deleteBtn"
                      onClick={() => initCompleteMatch(match.match_id)}
                      style={{
                        backgroundColor: "rgb(229, 231, 233)",
                        borderColor: "rgb(229, 231, 233)",
                        borderRadius: "50%",
                      }}
                    >
                      <CheckOutlined />
                    </Button>
                  </PermissionButton>
                </Tooltip>
              </div>
            </>
          )}
        </Col>
      </Row>
      <Divider plain></Divider>
    </>
  );
};

export default Match;
