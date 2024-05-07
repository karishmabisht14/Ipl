import React from "react";
import { Button } from "antd";
import { useEffect, useState } from "react";
import Match from "../matches list/Match";
import { getMatches, removeMatch } from "../../../services/matches/matches";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Row, Modal, Typography } from "antd";
import moment from "moment";
import PermissionButton from "../../../auth/PermissionButton";
const Text = Typography;

function formatDates(dates) {
  let formatedDates = dates.map((d) => moment(d).format("MMM, ddd DD YYYY"));
  return formatedDates;
}

function filterMatches(matches, searchObj) {
  if (searchObj.date) {
    let formatedDates = formatDates(searchObj.date);
    searchObj.date = formatedDates;
  }

  return matches.filter((match) => {
    if (
      !searchObj ||
      ((!searchObj.season || match.season_year === Number(searchObj.season)) &&
        (!searchObj.venue ||
          searchObj.venue.length === 0 ||
          searchObj.venue.includes(match.venue)) &&
        (!searchObj.team ||
          searchObj.team.length === 0 ||
          searchObj.team.includes(match.team_A) ||
          searchObj.team.includes(match.team_B)) &&
        (!searchObj.date ||
          searchObj.date.length === 0 ||
          searchObj.date.includes(match.date)) &&
        (!searchObj.search ||
          match.venue.toLowerCase().includes(searchObj.search.toLowerCase()) ||
          match.team_A.toLowerCase().includes(searchObj.search.toLowerCase()) ||
          match.team_B.toLowerCase().includes(searchObj.search.toLowerCase())))
    ) {
      return true;
    } else {
      return false;
    }
  });
}

const MatchesList = ({
  searchObj,
  setIsFormModalOpen,
  setCompletedModalOpen,
  payload,
  initFormData,
  matchesUpdatedCount,
  setMatchesUpdatedCount,
}) => {
  const [matchesList, setMatchesList] = useState(null);
  const [filteredMatchesList, setfilteredMatchesList] = useState(null);

  useEffect(() => {
    getMatches().then((matches) => {
      setMatchesList(matches);
    });
  }, [matchesUpdatedCount]);

  useEffect(() => {
    if (searchObj && matchesList) {
      let filteredMatches = filterMatches(matchesList, searchObj);
      setfilteredMatchesList(filteredMatches);
    }
  }, [matchesList, searchObj]);

  const initCreateUpdate = (id) => {
    if (id === undefined) {
      payload.current.operation = "ADD";
      payload.current.data = {};
      initFormData();
      setIsFormModalOpen(true);
    } else {
      //console.log("edit", id);
      payload.current.operation = "UPDATE";
      payload.current.data = {
        match_id: id,
      };
      const matchObj = filteredMatchesList?.find(
        (match) => match.match_id === id
      );

      payload.current.data = matchObj;
      //console.log("payload", payload);
      initFormData();
      setIsFormModalOpen(true);
    }
  };

  const initCompleteMatch = (id) => {
    //console.log("complete", id);
    payload.current.operation = "UPDATE";
    payload.current.data = {
      match_id: id,
    };
    const matchObj = filteredMatchesList?.find(
      (match) => match.match_id === id
    );
    payload.current.data = matchObj;
    //console.log("completedPayload", payload);
    setCompletedModalOpen(true);
  };

  const handleDelete = (matchId) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this match?",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => {
        removeMatch(matchId, "match_id").then(() => {
          setMatchesUpdatedCount(matchesUpdatedCount + 1);
        });
      },
    });
  };

  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            marginBottom: "24px",
            display: "Flex",
            justifyContent: "end",
          }}
        >
          <PermissionButton allowedPermissions={["addMatch"]}>
            <Button
              className="add-matches"
              style={{
                transform: "skew(-20deg)",
                backgroundColor: "rgb(239, 65, 35)",
                padding: "0px 20px",
                fontSize: "14px",
                fontWeight: "700",
                color: "#fff",
                margin: "0px 14px 0px",
                borderRadius: "3px",
                border: "1px solid transparent",
              }}
              onClick={() => initCreateUpdate()}
            >
              ADD MATCHES
            </Button>
          </PermissionButton>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {filteredMatchesList?.length <= 0 ? (
            <Text
              style={{
                color: "rgb(239, 65, 35)",
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              No Matches Found!!!
            </Text>
          ) : (
            filteredMatchesList?.map((match) => {
              return (
                <React.Fragment key={match.match_id}>
                  {match.status === "upcoming" && (
                    <Match
                      match={match}
                      initCreateUpdate={initCreateUpdate}
                      initCompleteMatch={initCompleteMatch}
                      handleDelete={handleDelete}
                    />
                  )}
                </React.Fragment>
              );
            })
          )}
        </Col>
      </Row>
    </>
  );
};

export default MatchesList;
