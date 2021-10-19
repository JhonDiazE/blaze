import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { HotTableModule } from '@handsontable/angular';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ContextMenuService} from 'primeng/api';
import { DetailComponent } from './detail/detail.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [

  {
      path: 'products',
      component: ProductsComponent,
      children: [
          { path: 'products', component: ProductsComponent }
      ]
  },

  { path: 'products', component: ProductsComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ProductsComponent,
    OrderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule,
    HotTableModule.forRoot(),
    TabViewModule,
    ToolbarModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
    ContextMenuModule,
    DynamicDialogModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [MessageService, ConfirmationService, ContextMenuService, DialogService],
  bootstrap: [AppComponent],
  exports: [
      RouterModule
  ]
})
export class AppModule {

 
}
