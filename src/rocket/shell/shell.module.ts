import { NgModule } from "@angular/core";
import {  } from "@angular/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material";
import { CommonModule } from "@angular/common";

import { RctIconsModule } from "./../icons"

import { RctShell } from "./shell/shell.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        CommonModule,
        RctIconsModule
    ],
    declarations: [
        RctShell
    ]
})
export class RctShellModule {}