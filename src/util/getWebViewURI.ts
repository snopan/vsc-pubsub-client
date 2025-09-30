import * as vscode from 'vscode';

export function getWebViewURI(context: vscode.ExtensionContext, panel: vscode.WebviewPanel, fp: string): vscode.Uri {
    const onDiskPath = getOnDiskURI(context, fp);

    return panel.webview.asWebviewUri(onDiskPath);
}

function getOnDiskURI(context: vscode.ExtensionContext, fp: string): vscode.Uri {
    const fragments = fp.split('/');

    return vscode.Uri.joinPath(context.extensionUri, ...fragments);
}