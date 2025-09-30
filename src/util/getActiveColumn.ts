import * as vscode from 'vscode';

export function getActiveColumn(): vscode.ViewColumn {
	const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

	return columnToShowIn || vscode.ViewColumn.One;
}