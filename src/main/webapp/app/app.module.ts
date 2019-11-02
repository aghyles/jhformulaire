import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhformulaireSharedModule } from 'app/shared/shared.module';
import { JhformulaireCoreModule } from 'app/core/core.module';
import { JhformulaireAppRoutingModule } from './app-routing.module';
import { JhformulaireHomeModule } from './home/home.module';
import { JhformulaireEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhformulaireSharedModule,
    JhformulaireCoreModule,
    JhformulaireHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhformulaireEntityModule,
    JhformulaireAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhformulaireAppModule {}
