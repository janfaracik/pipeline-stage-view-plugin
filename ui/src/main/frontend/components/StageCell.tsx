import React from "react";
import Label from "./Label";
import {buildStatusToClass, timely} from "./utils";
import {Stage} from "../models/Stage";

function StageCell({stage}: {stage: Stage}) {
    if (!stage) {
        return (
            <button className={'psv-cell psv-cell--null'}></button>
        )
    }

    const duration = stage.durationMillis - stage.pauseDurationMillis;
    const expectedDuration = 1000;
    let percentage = duration / expectedDuration;

    if (stage.status.toLowerCase() !== 'in_progress') {
        percentage = 100;
    }

    function clicky() {
        const div = document.createElement("pre")

        console.log(stage.stageFlowNodes)

        fetch(stage.stageFlowNodes[0]._links.log.href)
            .then(response => {
                return response.json();
            })
            .then(data => {
                div.textContent = JSON.stringify(data);
                // @ts-ignore
                dialog.modal(div, {
                    maxWidth: "1000px",
                    title: 'hello world',
                });
            });
    }

    return (
        <button onClick={() => clicky()} className={"psv-cell psv-cell" + buildStatusToClass(stage.status) + " psv-stage-cell"}>
            <Label text={timely(stage.durationMillis)}></Label>
            <div className={"durationboi " + (percentage !== 100 ? 'durationboi--animate' : '')} style={{width: percentage + "%"}}></div>
        </button>
    )
}

export default StageCell;
