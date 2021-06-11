import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionTermsComponent } from './condition-terms/condition-terms.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { PrivacityPoliticsComponent } from './privacity-politics/privacity-politics.component';
import { PromoCodesComponent } from './promo-codes/promo-codes.component';
import { ReferySystemComponent } from './refery-system/refery-system.component';
import { WarrantyPoliticsComponent } from './warranty-politics/warranty-politics.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';

import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages.routing';

@NgModule({
  declarations: [
    ConditionTermsComponent,
    FrequentQuestionsComponent,
    PrivacityPoliticsComponent,
    WarrantyPoliticsComponent,
    ReferySystemComponent,
    PromoCodesComponent,
  ],
  imports: [
    CommonModule,
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
    PagesRoutingModule
  ], 
  exports:[
    ConditionTermsComponent,
    FrequentQuestionsComponent,
    PrivacityPoliticsComponent,
    WarrantyPoliticsComponent,
    ReferySystemComponent,
    PromoCodesComponent,
  ] 
})
export class ComponentsModule { }
