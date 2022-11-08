import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "ngx-clipboard";
import { IconsComponent } from "./icons/icons.component";
import { PainterDetailComponent } from "./painter-detail/painter-detail.component";
import { UsersComponent } from "./users/users.component";
import { TablesComponent } from "./painters/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "src/app/components/components.module";
import { ModifyPainterComponent } from "src/app/pages/modify-painter/modify-painter.component";
import { DeletePainterComponent } from "src/app/pages/delete-painter/delete-painter.component";
import { LoginComponent } from "./login/login.component";
import { MyFilterPipe } from "../shared/my-filter.pipe";
import { OPComponent } from "./order-production/order-production.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
  ],
  declarations: [
    OPComponent,
    UsersComponent,
    TablesComponent,
    IconsComponent,
    PainterDetailComponent,
    ModifyPainterComponent,
    DeletePainterComponent,
    LoginComponent,
    MyFilterPipe,
  ],
})
export class PagesModule {}
