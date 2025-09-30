import * as vscode from 'vscode';
import { getActiveColumn } from "../../util/getActiveColumn";

export function newAddCommand(): vscode.Disposable {
    const addCommand = vscode.commands.registerCommand('pubsubClient.addConnection', () => {
		vscode.window.createWebviewPanel(
			"pubsubClient.addConnectionPannel",
			"Add Connection",
			getActiveColumn(),
			{}
		);
	});

    return addCommand
}