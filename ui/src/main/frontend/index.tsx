import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import Card from "./components/Card";
import Stageview from "./components/Stageview";
import './app.scss';

const rootElement = document.getElementById("graph");
if (!rootElement) throw new Error("Failed to find the 'graph' element");

console.log(rootElement.dataset)

const shouldShowExpand = rootElement.dataset.showExpandButton!.trim() === 'true';

const root = ReactDOMClient.createRoot(rootElement);


root.render(
    <Card title={'Stageview'}
          showExpandButton={shouldShowExpand}>
        <Stageview/>
    </Card>
);
