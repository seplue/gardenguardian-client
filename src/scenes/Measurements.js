import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../helpers/layout";
import { getDomain } from "../helpers/getDomain";
import User from "../models/User";
import { withRouter } from "react-router-dom";
import {Button} from "../components/design/Button"
import {Spinner} from "../components/design/Spinner"



const Container = styled(BaseContainer)`
  color: black;
  text-align: center;
`;

// noinspection JSUnresolvedFunction
const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

// noinspection JSUnresolvedFunction
const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Measurements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }



  componentDidMount() {
      this.getLatestMeasuremaents()


  }

    getLatestMeasuremaents(){
        //Fetch the updated board state
        fetch(`${getDomain()}/test_latest}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.json())
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong with getting measurements: " + err);
            });
    }

  render() {
    return (
      <Container>
          TEST

      </Container>
    );
  }
}

export default withRouter(Measurements);
