import React from "react";
import styled from "styled-components";
import {BaseContainer} from "../helpers/layout";
import {getDomain} from "../helpers/getDomain";
import User from "../models/User";
import {withRouter} from "react-router-dom";
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


class Measurements extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //measurements: null,
            //*/ test data
            measurements: [
                {
                    "bed_name": "firstBed",
                    "garden_name": "firstGarden",
                    "measurement_time": "Fri May 24 00:00:30 2019",
                    "measurement_type": "airHumidity",
                    "measurement_value": 39.1669161370059
                },
                {
                    "bed_name": "firstBed",
                    "garden_name": "firstGarden",
                    "measurement_time": "Fri May 24 00:00:30 2019",
                    "measurement_type": "pressure",
                    "measurement_value": 965.796907232234
                },
                {
                    "bed_name": "firstBed",
                    "garden_name": "firstGarden",
                    "measurement_time": "Fri May 24 00:00:30 2019",
                    "measurement_type": "temperature",
                    "measurement_value": 23.9912109375
                },
                {
                    "bed_name": "firstBed",
                    "garden_name": "firstGarden",
                    "measurement_time": "Fri May 24 00:00:31 2019",
                    "measurement_type": "dewPoint",
                    "measurement_value": 11.9723417171296
                }
            ]//*/
        };


    }


    componentDidMount(){
        this.getLatestMeasuremaents();
    }

    getLatestMeasuremaents(){
        //Fetch the latest measurements of the test station
        fetch(`${getDomain()}/test_latest`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            //after the request has been answered, do the following
            .then(response => response.json())
            .then(response => {
                this.setState({measurements: response});
                console.log(this.state.measurements)
            })
            // catch error
            .catch(err => {
                // log error
                console.log(err);
                // make an alert with the error
                alert("Something went wrong with getting measurements: " + err);
            });
    }

    render(){
        console.log(this.state.measurements);
        let listItems;
        if(this.state.measurements){
            listItems = this.state.measurements.map((number) =>
                <p>
                    {number.measurement_time}<br/>
                    {number.measurement_type}<br/>
                    {number.measurement_value}<br/>
                    {number.bed_name}<br/>
                    {number.garden_name}<br/>
                </p>
            );
        }
        return (
            <Container>
                TEST
                {!this.state.measurements ? (
                    <Spinner />
                ) : (
                    {listItems}
                )}

            </Container>
        );
    }
}

export default withRouter(Measurements);
