import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RctShellModule, RctShell } from "@rocket-ui/shell";
import { RctStylesModule } from "@rocket-ui/styles";

@NgModule({
    imports: [
        BrowserModule,
        RctShellModule,
        RctStylesModule
    ],
    bootstrap: [
        RctShell
    ]
})
class RctAdminApp {}

platformBrowserDynamic().bootstrapModule(RctAdminApp);