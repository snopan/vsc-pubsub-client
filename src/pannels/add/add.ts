import * as vscode from 'vscode';
import { getWebViewURI, getActiveColumn } from "../../util/index";

export function newAddCommand(context: vscode.ExtensionContext): vscode.Disposable {
    const addCommand = vscode.commands.registerCommand('pubsubClient.addConnection', () => {
		const panel = vscode.window.createWebviewPanel(
			"pubsubClient.addConnectionPannel",
			"Add Connection",
			getActiveColumn(),
			{enableScripts: true}
		);

        panel.webview.html = getWebviewContent(context, panel);
	});

    return addCommand;
}

function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="${getWebViewURI(context, panel, "node_modules/@vscode-elements/elements/dist/bundled.js")}"></script>
</head>

<body>
   
    <script>
    console.log("ooogga")
    </script>
    <vscode-button>Button</vscode-button>

</html>`;
}