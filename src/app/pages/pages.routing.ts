import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ParametersComponent } from './parameters/parameters.component';
import { HelpComponent } from './help/help.component';
import { DeliveryManComponent } from './delivery-man/delivery-man.component';
import { GuardsService } from '../services/GuardsService/guards.service';
import { UsersComponent } from './users/users.component';
import { ActiveServiceComponent } from './active-service/active-service.component';
import { EditUsersInformationComponent } from './edit-users-information/edit-users-information.component';
import { DeliveryManDataBaseComponent } from './delivery-man-data-base/delivery-man-data-base.component';
import { ConditionTermsComponent } from '../components/condition-terms/condition-terms.component';
import { WarrantyPoliticsComponent } from '../components/warranty-politics/warranty-politics.component';
import { PrivacityPoliticsComponent } from '../components/privacity-politics/privacity-politics.component';
import { FrequentQuestionsComponent } from '../components/frequent-questions/frequent-questions.component';
import { PromoCodesComponent } from '../components/promo-codes/promo-codes.component';
import { ReferySystemComponent } from '../components/refery-system/refery-system.component';
import { IndicatorsComponent } from './indicators/indicators.component';

const routes: Routes = [
    { path: 'Pages',
     component: PagesComponent,
   /*  canActivate:[GuardsService], */
      children:[
         {path: '', component: UsersComponent, /*  canActivate:[GuardsService], */ },
         {path: 'Transactions', component: TransactionsComponent, /*  canActivate:[GuardsService], */ },
         {path: 'DeliveryMan', component: DeliveryManComponent, /*  canActivate:[GuardsService], */  },
         {path: 'DeliveryManDataBase/:id', component: DeliveryManDataBaseComponent, /*  canActivate:[GuardsService], */  },
         {path: 'activeService', component: ActiveServiceComponent,/*  canActivate:[GuardsService], */  },
         {path: 'activeService', component: ActiveServiceComponent,/*  canActivate:[GuardsService], */  },
         {path: 'Parameters', component: ParametersComponent,/*  canActivate:[GuardsService], */  },
         {path: 'Indicators', component: IndicatorsComponent,/*  canActivate:[GuardsService], */  },
         {path: 'Help', component: HelpComponent, /*  canActivate:[GuardsService], */  },
         {path: 'ConditionalTerms', component: ConditionTermsComponent, /*  canActivate:[GuardsService], */},
         {path: 'FrequentQuestions', component: FrequentQuestionsComponent ,/*  canActivate:[GuardsService], */},
         {path: 'PrivacityPolitics', component: PrivacityPoliticsComponent ,/*  canActivate:[GuardsService], */},
         {path: 'WarrantyPolitics', component: WarrantyPoliticsComponent ,/*  canActivate:[GuardsService], */},
         {path: 'ReferSystems', component: ReferySystemComponent ,/*  canActivate:[GuardsService], */},
         {path: 'PromoCodes', component: PromoCodesComponent ,/*  canActivate:[GuardsService], */},
         {path: 'edit', component: EditUsersInformationComponent ,/*  canActivate:[GuardsService], */},
         {path: '**', redirectTo:'', pathMatch:'full', canActivate:[GuardsService] },

     ]
     },
   
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
