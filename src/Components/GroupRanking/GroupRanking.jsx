import React, { useState } from "react";
import { getRank } from "API/group";
import { useEffect } from "react";
import styled from "styled-components";
import { getGroupInviteCode } from "utils/inviteCode";

const Message = styled.div`
  margin-left: 3vh;
  margin-top: 2vh;
  color: black;
  font-size: 2vh;
`;

const RankBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  color: black;
  width: 90%;
  height: 10vh;
  font-size: 3vh;
  line-height: 10vh;
`;

const MyHeader = styled.div`
  font-size: 4vh;
  font-weight: bold;
  padding-left: 3vh;
  text-align: left;
  margin-bottom: 2vh;
`;

const RankNum = styled.span`
  color: #20b2aa;
  margin-left: 5vw;
`;

function GroupRanking() {
  const [rankInfo, setRankInfo] = useState();
  const [d, setD] = useState();
  const colors = ["#FFD700", "#C0C0C0", "#A0522D", "#f0f0f0"];

  useEffect(() => {
    getRank(getGroupInviteCode())
      .then((res) => {
        console.log(res);
        setRankInfo(res.data);
      })
      .then(
        setD(
          rankInfo[0].start_date.slice(0, 10) +
            "~" +
            rankInfo[0].end_date.slice(0, 10)
        )
      );
  }, []);

  return (
    <React.Fragment>
      <MyHeader>
        <Message>초대코드: {getGroupInviteCode()}</Message>
        <Message>그룹기간: {d ? d : "null"}</Message>
      </MyHeader>
      <div>
        {rankInfo &&
          rankInfo.map((rank, index) => {
            return (
              <RankBox
                color={index < 3 ? colors[index] : colors[3]}
                key={index + 1}
              >
                <RankNum>{index + 1}</RankNum> {rank.user_name}{" "}
                {rank.total_carbon} C/kwh
              </RankBox>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default GroupRanking;
