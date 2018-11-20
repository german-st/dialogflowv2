[![NPM](https://nodei.co/npm/node-red-contrib-dialogflowv2-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-red-contrib-dialogflowv2-api/)


# README #
Dialogflow node for Node-RED. Uses new version API V2.
Receives a text request for input. As a result, we get the full response from Dialogflow API.

The code for the node was forked and slightly simplified. Thank you very much [guidone](https://github.com/guidone "guidone") for [RedBot](https://github.com/guidone/node-red-contrib-chatbot "RedBot")

### Install ###

Install latest release: `npm i -g node-red-contrib-dialogflowv2-api`

### Inputs

`msg.payload` *string*

The text of our request for NLP

### Outputs

`msg._dialogflow ` *Object*

Result. Object from Dialogflow API response for our text request.

### Details

`msg.payload` Not affected or processed. The output remains the same.