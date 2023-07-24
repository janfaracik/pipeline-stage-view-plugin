import React, {useEffect, useState} from "react";
import Label from "./Label";
import BuildHeader from "./BuildHeader";
import StageCell from "./StageCell";
import {timely} from "./utils";
import {Build} from "../models/Build";
import {Column} from "../models/Column";

function Stageview() {
    const [columns, setColumns] = useState<Column[]>([])
    const [builds, setBuilds] = useState<Build[]>([]);

    function generateColumns() {
        let firstNonInProgressJob = builds
            .find(build => build.status !== 'IN_PROGRESS');

        if (!firstNonInProgressJob) {
            firstNonInProgressJob = builds[0];
        }

        if (!firstNonInProgressJob) {
            return [];
        }

        setColumns(firstNonInProgressJob.stages.map(stage => (
            {name: stage.name, averageDuration: 123, durationMillis: stage.durationMillis}
        )))
    }

    useEffect(() => {
        generateColumns();
    }, [builds]);

    useEffect(() => {
        // @ts-ignore
        setBuilds([
            {
                "_links": {
                    "self": {
                        "href": "/job/Core/job/jenkins/job/master/5198/wfapi/describe"
                    },
                    "changesets": {
                        "href": "/job/Core/job/jenkins/job/master/5198/wfapi/changesets"
                    },
                    "artifacts": {
                        "href": "/job/Core/job/jenkins/job/master/5198/wfapi/artifacts"
                    }
                },
                "id": "5198",
                "name": "#5198",
                "status": "SUCCESS",
                "startTimeMillis": 1689684105340,
                "endTimeMillis": 1689694355006,
                "durationMillis": 10249666,
                "queueDurationMillis": 5,
                "pauseDurationMillis": 0,
                "stages": [
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/5/wfapi/describe"
                            }
                        },
                        "id": "5",
                        "name": "Record build",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684106059,
                        "durationMillis": 72836,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/10/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/10/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/10/log"
                                    }
                                },
                                "id": "10",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684112097,
                                "durationMillis": 3062,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "9"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/11/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/11/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/11/log"
                                    }
                                },
                                "id": "11",
                                "name": "Check out from version control",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684115159,
                                "durationMillis": 45696,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "10"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/14/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/14/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/14/log"
                                    }
                                },
                                "id": "14",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record build --name ${BUILD_TAG} --source jenkinsci/jenkins=.",
                                "startTimeMillis": 1689684160885,
                                "durationMillis": 3142,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "13"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/15/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/15/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/15/log"
                                    }
                                },
                                "id": "15",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable record session --build jenkins-Core-jenkins-master-5198 --flavor platform=linux --flavor jdk=11 >launchable-session-linux-jdk11.txt",
                                "startTimeMillis": 1689684164027,
                                "durationMillis": 856,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "14"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/16/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/16/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/16/log"
                                    }
                                },
                                "id": "16",
                                "name": "Stash some files to be used later in the build",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk11.txt",
                                "startTimeMillis": 1689684164883,
                                "durationMillis": 4403,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "15"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/17/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/17/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/17/log"
                                    }
                                },
                                "id": "17",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable record session --build jenkins-Core-jenkins-master-5198 --flavor platform=linux --flavor jdk=17 >launchable-session-linux-jdk17.txt",
                                "startTimeMillis": 1689684169286,
                                "durationMillis": 839,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "16"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/18/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/18/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/18/log"
                                    }
                                },
                                "id": "18",
                                "name": "Stash some files to be used later in the build",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk17.txt",
                                "startTimeMillis": 1689684170125,
                                "durationMillis": 197,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "17"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/19/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/19/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/19/log"
                                    }
                                },
                                "id": "19",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable record session --build jenkins-Core-jenkins-master-5198 --flavor platform=windows --flavor jdk=17 >launchable-session-windows-jdk17.txt",
                                "startTimeMillis": 1689684170322,
                                "durationMillis": 822,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "18"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/20/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/20/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/20/log"
                                    }
                                },
                                "id": "20",
                                "name": "Stash some files to be used later in the build",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-windows-jdk17.txt",
                                "startTimeMillis": 1689684171144,
                                "durationMillis": 202,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "19"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/21/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/21/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/21/log"
                                    }
                                },
                                "id": "21",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable record session --build jenkins-Core-jenkins-master-5198 --flavor platform=linux --flavor jdk=19 >launchable-session-linux-jdk19.txt",
                                "startTimeMillis": 1689684171346,
                                "durationMillis": 816,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "20"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/22/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/22/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/22/log"
                                    }
                                },
                                "id": "22",
                                "name": "Stash some files to be used later in the build",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk19.txt",
                                "startTimeMillis": 1689684172162,
                                "durationMillis": 184,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "21"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/27/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/27/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/27/log"
                                    }
                                },
                                "id": "27",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record commit",
                                "startTimeMillis": 1689684172423,
                                "durationMillis": 3130,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "26"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/32/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/32/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/32/log"
                                    }
                                },
                                "id": "32",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record commit",
                                "startTimeMillis": 1689684175638,
                                "durationMillis": 3115,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "31"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/68/wfapi/describe"
                            }
                        },
                        "id": "68",
                        "name": "Linux - JDK 17 - Checkout",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684188011,
                        "durationMillis": 48100,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/69/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/69/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/69/log"
                                    }
                                },
                                "id": "69",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684188706,
                                "durationMillis": 3060,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "68"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/70/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/70/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/70/log"
                                    }
                                },
                                "id": "70",
                                "name": "Check out from version control",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684191766,
                                "durationMillis": 44319,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "69"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/78/wfapi/describe"
                            }
                        },
                        "id": "78",
                        "name": "Linux - JDK 17 - Build / Test",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684236153,
                        "durationMillis": 6964272,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/83/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/83/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/83/log"
                                    }
                                },
                                "id": "83",
                                "name": "Restore files previously stashed",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk17.txt",
                                "startTimeMillis": 1689684236865,
                                "durationMillis": 3663,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "82"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/84/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/84/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/84/log"
                                    }
                                },
                                "id": "84",
                                "name": "Read file from workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk17.txt",
                                "startTimeMillis": 1689684240528,
                                "durationMillis": 33,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "83"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/91/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/91/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/91/log"
                                    }
                                },
                                "id": "91",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684240676,
                                "durationMillis": 11,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "90"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/92/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/92/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/92/log"
                                    }
                                },
                                "id": "92",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "curl --fail --silent --show-error --location $HEALTHCHECK",
                                "startTimeMillis": 1689684240687,
                                "durationMillis": 783,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "91"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/95/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/95/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/95/log"
                                    }
                                },
                                "id": "95",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: using artifact caching proxy from 'aws' provider.",
                                "startTimeMillis": 1689684241517,
                                "durationMillis": 17,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "94"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/100/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/100/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/100/log"
                                    }
                                },
                                "id": "100",
                                "name": "Use a tool from a predefined Tool Installation",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn",
                                "startTimeMillis": 1689684241686,
                                "durationMillis": 780,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "99"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/101/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/101/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/101/log"
                                    }
                                },
                                "id": "101",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684242466,
                                "durationMillis": 18,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "100"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/102/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/102/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/102/log"
                                    }
                                },
                                "id": "102",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684242484,
                                "durationMillis": 19,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "101"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/103/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/103/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/103/log"
                                    }
                                },
                                "id": "103",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/java/openjdk/bin/java",
                                "startTimeMillis": 1689684242503,
                                "durationMillis": 26,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "102"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/104/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/104/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/104/log"
                                    }
                                },
                                "id": "104",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684242529,
                                "durationMillis": 15,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "103"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/105/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/105/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/105/log"
                                    }
                                },
                                "id": "105",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/jdk-17/bin/java",
                                "startTimeMillis": 1689684242544,
                                "durationMillis": 28,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "104"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/106/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/106/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/106/log"
                                    }
                                },
                                "id": "106",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: Using JAVA_HOME=/opt/jdk-17 as default JDK home.",
                                "startTimeMillis": 1689684242572,
                                "durationMillis": 17,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "105"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/109/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/109/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/109/log"
                                    }
                                },
                                "id": "109",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684242615,
                                "durationMillis": 17,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "108"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/110/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/110/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/110/log"
                                    }
                                },
                                "id": "110",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn --batch-mode --show-version --errors --no-transfer-progress -Pdebug -Penable-jacoco --update-snapshots -Dmaven.repo.local=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/m2repo -Dmaven.test.failure.ignore -DforkCount=2 -Dspotbugs.failOnError=false -Dcheckstyle.failOnViolation=false -Dset.changelist help:evaluate -Dexpression=changelist -Doutput=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/changelist clean install",
                                "startTimeMillis": 1689684242632,
                                "durationMillis": 6949313,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "109"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/296/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/296/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/296/log"
                                    }
                                },
                                "id": "296",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691192154,
                                "durationMillis": 17,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "295"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/297/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/297/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/297/log"
                                    }
                                },
                                "id": "297",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "git add . && git diff --exit-code HEAD",
                                "startTimeMillis": 1689691192171,
                                "durationMillis": 501,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "296"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/125/wfapi/describe"
                            }
                        },
                        "id": "125",
                        "name": "Linux - JDK 19 - Checkout",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684294606,
                        "durationMillis": 50386,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/126/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/126/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/126/log"
                                    }
                                },
                                "id": "126",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684295272,
                                "durationMillis": 3057,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "125"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/127/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/127/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/127/log"
                                    }
                                },
                                "id": "127",
                                "name": "Check out from version control",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684298329,
                                "durationMillis": 46634,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "126"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/132/wfapi/describe"
                            }
                        },
                        "id": "132",
                        "name": "Linux - JDK 19 - Build / Test",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684345027,
                        "durationMillis": 6322575,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/137/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/137/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/137/log"
                                    }
                                },
                                "id": "137",
                                "name": "Restore files previously stashed",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk19.txt",
                                "startTimeMillis": 1689684345831,
                                "durationMillis": 3765,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "136"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/138/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/138/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/138/log"
                                    }
                                },
                                "id": "138",
                                "name": "Read file from workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk19.txt",
                                "startTimeMillis": 1689684349596,
                                "durationMillis": 34,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "137"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/145/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/145/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/145/log"
                                    }
                                },
                                "id": "145",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684349766,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "144"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/146/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/146/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/146/log"
                                    }
                                },
                                "id": "146",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "curl --fail --silent --show-error --location $HEALTHCHECK",
                                "startTimeMillis": 1689684349779,
                                "durationMillis": 768,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "145"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/149/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/149/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/149/log"
                                    }
                                },
                                "id": "149",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: using artifact caching proxy from 'aws' provider.",
                                "startTimeMillis": 1689684350600,
                                "durationMillis": 17,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "148"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/154/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/154/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/154/log"
                                    }
                                },
                                "id": "154",
                                "name": "Use a tool from a predefined Tool Installation",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn",
                                "startTimeMillis": 1689684350776,
                                "durationMillis": 759,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "153"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/155/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/155/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/155/log"
                                    }
                                },
                                "id": "155",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684351535,
                                "durationMillis": 21,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "154"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/156/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/156/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/156/log"
                                    }
                                },
                                "id": "156",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684351556,
                                "durationMillis": 10,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "155"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/157/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/157/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/157/log"
                                    }
                                },
                                "id": "157",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/java/openjdk/bin/java",
                                "startTimeMillis": 1689684351566,
                                "durationMillis": 29,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "156"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/158/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/158/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/158/log"
                                    }
                                },
                                "id": "158",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684351595,
                                "durationMillis": 10,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "157"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/159/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/159/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/159/log"
                                    }
                                },
                                "id": "159",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/jdk-19/bin/java",
                                "startTimeMillis": 1689684351605,
                                "durationMillis": 32,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "158"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/160/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/160/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/160/log"
                                    }
                                },
                                "id": "160",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: Using JAVA_HOME=/opt/jdk-19 as default JDK home.",
                                "startTimeMillis": 1689684351637,
                                "durationMillis": 15,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "159"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/163/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/163/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/163/log"
                                    }
                                },
                                "id": "163",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684351681,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "162"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/164/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/164/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/164/log"
                                    }
                                },
                                "id": "164",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn --batch-mode --show-version --errors --no-transfer-progress -Pdebug -Penable-jacoco --update-snapshots -Dmaven.repo.local=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/m2repo -Dmaven.test.failure.ignore -DforkCount=2 -Dspotbugs.failOnError=false -Dcheckstyle.failOnViolation=false -Dset.changelist help:evaluate -Dexpression=changelist -Doutput=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/changelist clean install",
                                "startTimeMillis": 1689684351693,
                                "durationMillis": 6306798,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "163"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/266/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/266/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/266/log"
                                    }
                                },
                                "id": "266",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689690658701,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "265"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/267/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/267/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/267/log"
                                    }
                                },
                                "id": "267",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "git add . && git diff --exit-code HEAD",
                                "startTimeMillis": 1689690658713,
                                "durationMillis": 514,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "266"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/167/wfapi/describe"
                            }
                        },
                        "id": "167",
                        "name": "Windows - JDK 17 - Checkout",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684354079,
                        "durationMillis": 42350,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/168/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/168/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/168/log"
                                    }
                                },
                                "id": "168",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684354848,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "167"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/169/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/169/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/169/log"
                                    }
                                },
                                "id": "169",
                                "name": "Windows Batch Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "git config --global core.longpaths true",
                                "startTimeMillis": 1689684354860,
                                "durationMillis": 617,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "168"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/170/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/170/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/170/log"
                                    }
                                },
                                "id": "170",
                                "name": "Check out from version control",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684355477,
                                "durationMillis": 40917,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "169"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/175/wfapi/describe"
                            }
                        },
                        "id": "175",
                        "name": "Windows - JDK 17 - Build / Test",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684396476,
                        "durationMillis": 9916121,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/180/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/180/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/180/log"
                                    }
                                },
                                "id": "180",
                                "name": "Restore files previously stashed",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-windows-jdk17.txt",
                                "startTimeMillis": 1689684397399,
                                "durationMillis": 1027,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "179"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/181/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/181/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/181/log"
                                    }
                                },
                                "id": "181",
                                "name": "Read file from workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-windows-jdk17.txt",
                                "startTimeMillis": 1689684398426,
                                "durationMillis": 32,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "180"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/188/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/188/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/188/log"
                                    }
                                },
                                "id": "188",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684398613,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "187"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/189/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/189/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/189/log"
                                    }
                                },
                                "id": "189",
                                "name": "Windows Batch Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "curl --fail --silent --show-error --location %HEALTHCHECK%",
                                "startTimeMillis": 1689684398625,
                                "durationMillis": 292,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "188"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/192/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/192/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/192/log"
                                    }
                                },
                                "id": "192",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: using artifact caching proxy from 'azure' provider.",
                                "startTimeMillis": 1689684398976,
                                "durationMillis": 15,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "191"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/197/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/197/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/197/log"
                                    }
                                },
                                "id": "197",
                                "name": "Use a tool from a predefined Tool Installation",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn",
                                "startTimeMillis": 1689684399165,
                                "durationMillis": 642,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "196"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/198/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/198/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/198/log"
                                    }
                                },
                                "id": "198",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684399807,
                                "durationMillis": 28,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "197"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/199/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/199/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/199/log"
                                    }
                                },
                                "id": "199",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684399835,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "198"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/200/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/200/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/200/log"
                                    }
                                },
                                "id": "200",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "C:/openjdk-17/bin/java.exe",
                                "startTimeMillis": 1689684399847,
                                "durationMillis": 34,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "199"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/201/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/201/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/201/log"
                                    }
                                },
                                "id": "201",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684399881,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "200"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/202/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/202/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/202/log"
                                    }
                                },
                                "id": "202",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "C:/tools/jdk-17/bin/java.exe",
                                "startTimeMillis": 1689684399893,
                                "durationMillis": 46,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "201"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/203/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/203/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/203/log"
                                    }
                                },
                                "id": "203",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: Using JAVA_HOME=C:/tools/jdk-17 as default JDK home.",
                                "startTimeMillis": 1689684399939,
                                "durationMillis": 15,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "202"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/206/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/206/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/206/log"
                                    }
                                },
                                "id": "206",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684399988,
                                "durationMillis": 11,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "205"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/207/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/207/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/207/log"
                                    }
                                },
                                "id": "207",
                                "name": "Windows Batch Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn --batch-mode --show-version --errors --no-transfer-progress -Pdebug -Penable-jacoco --update-snapshots -Dmaven.repo.local=C:/Jenkins/agent/workspace/Core_jenkins_master@tmp/m2repo -Dmaven.test.failure.ignore -DforkCount=2 -Dspotbugs.failOnError=false -Dcheckstyle.failOnViolation=false -Dset.changelist help:evaluate -Dexpression=changelist -Doutput=C:/Jenkins/agent/workspace/Core_jenkins_master@tmp/changelist clean install",
                                "startTimeMillis": 1689684399999,
                                "durationMillis": 9904698,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "206"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/371/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/371/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/371/log"
                                    }
                                },
                                "id": "371",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689694304944,
                                "durationMillis": 8,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "370"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/210/wfapi/describe"
                            }
                        },
                        "id": "210",
                        "name": "Linux - JDK 11 - Checkout",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684435454,
                        "durationMillis": 53024,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/211/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/211/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/211/log"
                                    }
                                },
                                "id": "211",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684436126,
                                "durationMillis": 3058,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "210"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/212/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/212/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/212/log"
                                    }
                                },
                                "id": "212",
                                "name": "Check out from version control",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684439184,
                                "durationMillis": 49255,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "211"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/217/wfapi/describe"
                            }
                        },
                        "id": "217",
                        "name": "Linux - JDK 11 - Build / Test",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689684488522,
                        "durationMillis": 7357372,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/222/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/222/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/222/log"
                                    }
                                },
                                "id": "222",
                                "name": "Restore files previously stashed",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk11.txt",
                                "startTimeMillis": 1689684489394,
                                "durationMillis": 3848,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "221"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/223/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/223/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/223/log"
                                    }
                                },
                                "id": "223",
                                "name": "Read file from workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable-session-linux-jdk11.txt",
                                "startTimeMillis": 1689684493242,
                                "durationMillis": 34,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "222"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/230/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/230/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/230/log"
                                    }
                                },
                                "id": "230",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684493448,
                                "durationMillis": 11,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "229"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/231/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/231/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/231/log"
                                    }
                                },
                                "id": "231",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "curl --fail --silent --show-error --location $HEALTHCHECK",
                                "startTimeMillis": 1689684493459,
                                "durationMillis": 807,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "230"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/234/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/234/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/234/log"
                                    }
                                },
                                "id": "234",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: using artifact caching proxy from 'aws' provider.",
                                "startTimeMillis": 1689684494332,
                                "durationMillis": 28,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "233"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/239/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/239/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/239/log"
                                    }
                                },
                                "id": "239",
                                "name": "Use a tool from a predefined Tool Installation",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn",
                                "startTimeMillis": 1689684494542,
                                "durationMillis": 782,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "238"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/240/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/240/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/240/log"
                                    }
                                },
                                "id": "240",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684495324,
                                "durationMillis": 28,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "239"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/241/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/241/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/241/log"
                                    }
                                },
                                "id": "241",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684495352,
                                "durationMillis": 16,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "240"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/242/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/242/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/242/log"
                                    }
                                },
                                "id": "242",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/java/openjdk/bin/java",
                                "startTimeMillis": 1689684495368,
                                "durationMillis": 39,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "241"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/243/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/243/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/243/log"
                                    }
                                },
                                "id": "243",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684495407,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "242"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/244/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/244/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/244/log"
                                    }
                                },
                                "id": "244",
                                "name": "Verify if file exists in workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/opt/jdk-11/bin/java",
                                "startTimeMillis": 1689684495420,
                                "durationMillis": 60,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "243"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/245/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/245/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/245/log"
                                    }
                                },
                                "id": "245",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "INFO: Using JAVA_HOME=/opt/jdk-11 as default JDK home.",
                                "startTimeMillis": 1689684495480,
                                "durationMillis": 24,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "244"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/248/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/248/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/248/log"
                                    }
                                },
                                "id": "248",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689684495541,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "247"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/249/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/249/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/249/log"
                                    }
                                },
                                "id": "249",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "mvn --batch-mode --show-version --errors --no-transfer-progress -Pdebug -Penable-jacoco --update-snapshots -Dmaven.repo.local=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/m2repo -Dmaven.test.failure.ignore -DforkCount=2 -Dspotbugs.failOnError=false -Dcheckstyle.failOnViolation=false -Dset.changelist help:evaluate -Dexpression=changelist -Doutput=/home/jenkins/agent/workspace/Core_jenkins_master@tmp/changelist clean install",
                                "startTimeMillis": 1689684495554,
                                "durationMillis": 7341761,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "248"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/326/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/326/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/326/log"
                                    }
                                },
                                "id": "326",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691837520,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "325"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/327/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/327/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/327/log"
                                    }
                                },
                                "id": "327",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "git add . && git diff --exit-code HEAD",
                                "startTimeMillis": 1689691837533,
                                "durationMillis": 570,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "326"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/275/wfapi/describe"
                            }
                        },
                        "id": "275",
                        "name": "Linux - JDK 19 - Publish",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689690667641,
                        "durationMillis": 13675,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/276/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/276/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/276/log"
                                    }
                                },
                                "id": "276",
                                "name": "成果物を保存",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689690668833,
                                "durationMillis": 636,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "275"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/279/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/279/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/279/log"
                                    }
                                },
                                "id": "279",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689690669529,
                                "durationMillis": 12,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "278"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/280/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/280/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/280/log"
                                    }
                                },
                                "id": "280",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record tests --session builds/jenkins-Core-jenkins-master-5198/test_sessions/2069168 --flavor platform=linux --flavor jdk=19 maven './**/target/surefire-reports'",
                                "startTimeMillis": 1689690669541,
                                "durationMillis": 11665,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "279"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/305/wfapi/describe"
                            }
                        },
                        "id": "305",
                        "name": "Linux - JDK 17 - Publish",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689691200461,
                        "durationMillis": 14188,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/306/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/306/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/306/log"
                                    }
                                },
                                "id": "306",
                                "name": "成果物を保存",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691201425,
                                "durationMillis": 562,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "305"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/309/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/309/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/309/log"
                                    }
                                },
                                "id": "309",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691202044,
                                "durationMillis": 11,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "308"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/310/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/310/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/310/log"
                                    }
                                },
                                "id": "310",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record tests --session builds/jenkins-Core-jenkins-master-5198/test_sessions/2069166 --flavor platform=linux --flavor jdk=17 maven './**/target/surefire-reports'",
                                "startTimeMillis": 1689691202055,
                                "durationMillis": 12457,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "309"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/335/wfapi/describe"
                            }
                        },
                        "id": "335",
                        "name": "Linux - JDK 11 - Publish",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689691845939,
                        "durationMillis": 85112,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/336/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/336/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/336/log"
                                    }
                                },
                                "id": "336",
                                "name": "成果物を保存",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691846706,
                                "durationMillis": 539,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "335"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/337/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/337/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/337/log"
                                    }
                                },
                                "id": "337",
                                "name": "Discover Git reference build",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "jenkins",
                                "startTimeMillis": 1689691847245,
                                "durationMillis": 46,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "336"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/338/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/338/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/338/log"
                                    }
                                },
                                "id": "338",
                                "name": "Record code coverage results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{tools=[{parser=JACOCO, pattern=coverage/target/site/jacoco-aggregate/jacoco.xml}], sourceCodeRetention=MODIFIED, sourceDirectories=[{path=core/src/main/java}]}",
                                "startTimeMillis": 1689691847291,
                                "durationMillis": 10290,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "337"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/339/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/339/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/339/log"
                                    }
                                },
                                "id": "339",
                                "name": "Print Message",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "Recording static analysis results for 'Linux'",
                                "startTimeMillis": 1689691857581,
                                "durationMillis": 18,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "338"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/340/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/340/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/340/log"
                                    }
                                },
                                "id": "340",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{enabledForFailure=true, filters=[@excludeFile(<anonymous>=.*Assert.java)], sourceCodeEncoding=UTF-8, tools=[@java()], trendChartType=TOOLS_ONLY, skipBlames=true}",
                                "startTimeMillis": 1689691857599,
                                "durationMillis": 39219,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "339"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/341/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/341/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/341/log"
                                    }
                                },
                                "id": "341",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{qualityGates=[{threshold=1, type=TOTAL, unstable=true}], enabledForFailure=true, filters=[@excludeFile(<anonymous>=.*Assert.java)], sourceCodeEncoding=UTF-8, tools=[@javaDoc()], trendChartType=TOOLS_ONLY, skipBlames=true}",
                                "startTimeMillis": 1689691896818,
                                "durationMillis": 1028,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "340"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/342/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/342/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/342/log"
                                    }
                                },
                                "id": "342",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{qualityGates=[{threshold=1, type=NEW, unstable=true}], sourceCodeEncoding=UTF-8, trendChartType=TOOLS_ONLY, tool=@spotBugs(pattern=**/target/spotbugsXml.xml), skipBlames=true}",
                                "startTimeMillis": 1689691897846,
                                "durationMillis": 9904,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "341"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/343/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/343/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/343/log"
                                    }
                                },
                                "id": "343",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{qualityGates=[{threshold=1, type=TOTAL, unstable=true}], sourceCodeEncoding=UTF-8, trendChartType=TOOLS_ONLY, tool=@checkStyle(pattern=**/target/checkstyle-result.xml), skipBlames=true}",
                                "startTimeMillis": 1689691907750,
                                "durationMillis": 4347,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "342"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/344/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/344/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/344/log"
                                    }
                                },
                                "id": "344",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{qualityGates=[{threshold=1, type=TOTAL, unstable=true}], sourceCodeEncoding=UTF-8, trendChartType=TOOLS_ONLY, tool=@esLint(pattern=**/target/eslint-warnings.xml), skipBlames=true}",
                                "startTimeMillis": 1689691912097,
                                "durationMillis": 1582,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "343"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/345/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/345/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/345/log"
                                    }
                                },
                                "id": "345",
                                "name": "Record compiler warnings and static analysis results",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "{qualityGates=[{threshold=1, type=TOTAL, unstable=true}], sourceCodeEncoding=UTF-8, trendChartType=TOOLS_ONLY, tool=@styleLint(pattern=**/target/stylelint-warnings.xml), skipBlames=true}",
                                "startTimeMillis": 1689691913679,
                                "durationMillis": 1572,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "344"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/346/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/346/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/346/log"
                                    }
                                },
                                "id": "346",
                                "name": "Read file from workspace",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "/home/jenkins/agent/workspace/Core_jenkins_master@tmp/changelist",
                                "startTimeMillis": 1689691915251,
                                "durationMillis": 49,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "345"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/349/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/349/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/349/log"
                                    }
                                },
                                "id": "349",
                                "name": "成果物を保存",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691915361,
                                "durationMillis": 7344,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "348"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/354/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/354/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/354/log"
                                    }
                                },
                                "id": "354",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689691922880,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "353"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/355/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/355/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/355/log"
                                    }
                                },
                                "id": "355",
                                "name": "Shell Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record tests --session builds/jenkins-Core-jenkins-master-5198/test_sessions/2069165 --flavor platform=linux --flavor jdk=11 maven './**/target/surefire-reports'",
                                "startTimeMillis": 1689691922893,
                                "durationMillis": 8038,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "354"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/379/wfapi/describe"
                            }
                        },
                        "id": "379",
                        "name": "Windows - JDK 17 - Publish",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689694312636,
                        "durationMillis": 17341,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/380/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/380/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/380/log"
                                    }
                                },
                                "id": "380",
                                "name": "成果物を保存",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689694313594,
                                "durationMillis": 1235,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "379"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/383/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/383/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/383/log"
                                    }
                                },
                                "id": "383",
                                "name": "Checks if running on a Unix-like node",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689694314896,
                                "durationMillis": 13,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "382"
                                ]
                            },
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/384/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/384/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/384/log"
                                    }
                                },
                                "id": "384",
                                "name": "Windows Batch Script",
                                "execNode": "",
                                "status": "SUCCESS",
                                "parameterDescription": "launchable verify && launchable record tests --session builds/jenkins-Core-jenkins-master-5198/test_sessions/2069167 --flavor platform=windows --flavor jdk=17 maven ./**/target/surefire-reports",
                                "startTimeMillis": 1689694314909,
                                "durationMillis": 14934,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "383"
                                ]
                            }
                        ]
                    },
                    {
                        // @ts-ignore
                        "_links": {
                            "self": {
                                "href": "/job/Core/job/jenkins/job/master/5198/execution/node/396/wfapi/describe"
                            }
                        },
                        "id": "396",
                        "name": "Deploy",
                        "execNode": "",
                        "status": "SUCCESS",
                        "startTimeMillis": 1689694330499,
                        "durationMillis": 24439,
                        "pauseDurationMillis": 0,
                        "stageFlowNodes": [
                            {
                                "_links": {
                                    "self": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/399/wfapi/describe"
                                    },
                                    "log": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/399/wfapi/log"
                                    },
                                    "console": {
                                        "href": "/job/Core/job/jenkins/job/master/5198/execution/node/399/log"
                                    }
                                },
                                "id": "399",
                                "name": "Perform an HTTP Request and return a response object",
                                "execNode": "",
                                "status": "SUCCESS",
                                "startTimeMillis": 1689694331428,
                                "durationMillis": 23392,
                                "pauseDurationMillis": 0,
                                "parentNodes": [
                                    "398"
                                ]
                            }
                        ]
                    }
                ]
            }
        ])

        // fetch('http://localhost:8080/jenkins/job/coming%20back/wfapi/runs?since=%235&fullStages=true&_=1690120329481')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => setBuilds(data));
        //
        // const intervalID = setInterval(() =>  {
        //     fetch('http://localhost:8080/jenkins/job/coming%20back/wfapi/runs?since=%235&fullStages=true&_=1690120329481')
        //         .then(response => {
        //             return response.json();
        //         })
        //         .then(data => setBuilds(data));
        // }, 3000);
        //
        // return () => clearInterval(intervalID);
    }, [])

    return (
        <table className={"psv-stageview"}>
            <thead>
                <tr className={"psv-stageview__stages"}>
                    <th>
                        {/*Average time: 10 minutes 48 seconds*/}
                    </th>
                    {columns.map((column: Column) => {
                        return (
                            <th>
                                <p>{column.name}</p>
                                <p>
                                    <Label text={timely(column.durationMillis)}></Label>
                                </p>
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {builds.map((build: any) => {
                    return (
                        <tr className={"psv-stageview__build"}>
                            <td width={"180px"}>
                                <BuildHeader build={build} />
                            </td>
                            {columns.map((column: any) => {
                                const stage = build.stages[columns.indexOf(column)];

                                return (
                                    <td>
                                        <StageCell stage={stage} />
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Stageview
