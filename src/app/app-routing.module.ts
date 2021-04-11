import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'commission',
    loadChildren: () => import('./commission/commission.module').then( m => m.CommissionPageModule)
  },
  {
    path: 'calculatrice',
    loadChildren: () => import('./calculatrice/calculatrice.module').then( m => m.CalculatricePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'accueil-caissier',
    loadChildren: () => import('./accueil-caissier/accueil-caissier.module').then( m => m.AccueilCaissierPageModule)
  },
  {
    path: 'accueil-user',
    loadChildren: () => import('./accueil-user/accueil-user.module').then( m => m.AccueilUserPageModule)
  },
  {
    path: 'accueil-sys',
    loadChildren: () => import('./accueil-sys/accueil-sys.module').then( m => m.AccueilSysPageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./compAdminSys/ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./compAdminSys/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./compAdminSys/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list-caissier',
    loadChildren: () => import('./compAdminSys/list-caissier/list-caissier.module').then( m => m.ListCaissierPageModule)
  },
  {
    path: 'comp-caissier',
    loadChildren: () => import('./comp-caissier/comp-caissier.module').then( m => m.CompCaissierPageModule)
  },
  {
    path: 'list-agence',
    loadChildren: () => import('./compAdminSys/list-agence/list-agence.module').then( m => m.ListAgencePageModule)
  },
  {
    path: 'list-compte',
    loadChildren: () => import('./compAdminSys/list-compte/list-compte.module').then( m => m.ListComptePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
