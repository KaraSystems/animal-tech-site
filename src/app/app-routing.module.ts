import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessModule } from './modules/business/business.module';
import { CardModule } from './modules/card/card.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: ():Promise<BusinessModule> => import('./modules/business/business.module')
      .then(m => m.BusinessModule)
  },
  {
    path: 'card',
    loadChildren: (): Promise<CardModule> => import('./modules/card/card.module')
      .then(m => m.CardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
