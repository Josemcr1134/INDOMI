import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { RouterModule } from '@angular/router';


import { UsersComponent } from './users/users.component';

import {  MatFormFieldModule,   } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from "@angular/material/select";
import { ActiveServiceComponent } from './active-service/active-service.component';
import { DeliveryManComponent } from './delivery-man/delivery-man.component';
import { HelpComponent } from './help/help.component';
import { PagesComponent } from './pages.component';
import { ParametersComponent } from './parameters/parameters.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { EditUsersInformationComponent } from './edit-users-information/edit-users-information.component';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';
import { DeliveryManDataBaseComponent } from './delivery-man-data-base/delivery-man-data-base.component';
import { AddPromCodeComponent } from './add-prom-code/add-prom-code.component';
import { ExpandServicesInfoComponent } from './expand-services-info/expand-services-info.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { DrawbacksComponent } from './drawbacks/drawbacks.component';
@NgModule({
    declarations: [
      PagesComponent,
    UsersComponent,
    TransactionsComponent,
    DeliveryManComponent,
    ActiveServiceComponent,
    ParametersComponent,
    HelpComponent,
    EditUsersInformationComponent,
    ChangePasswordAdminComponent,
    DeliveryManDataBaseComponent,
    AddPromCodeComponent,
    ExpandServicesInfoComponent,
    IndicatorsComponent,
    DrawbacksComponent,
    ],
    imports: [CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatIconModule,
        MatCardModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatMenuModule,
        MatTabsModule,
        MatTableModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSlideToggleModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
         MatSelectModule,
         
    ],
    exports: [
      PagesComponent,
      UsersComponent,
      TransactionsComponent,
      DeliveryManComponent,
      ActiveServiceComponent,
      ParametersComponent,
      HelpComponent,
      
    ],
    providers:[CurrencyPipe]

  })
export class pagesModule {}
