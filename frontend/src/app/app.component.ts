import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfirmationService, MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { DetailComponent } from './detail/detail.component';
import { Order } from './order';
import { OrderService } from './order.service';


import { Product } from './product';
import { ProductService } from './product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  

  items: MenuItem[];

  products: Product[]=[];
  selectedProduct: Product;
  productNew: Product;
  orders: Order[]=[];
  orderSelected: Order;

  clonedProducts: { [s: number]: Product; } = {};
  subscriptions: Subscription[] = [];

  

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
    private productService:ProductService,
    private orderService:OrderService,

    public dialogService: DialogService,
    private router: Router,
    private route:ActivatedRoute
    ) { 


  }


  ngOnInit() {
    this.findAll();
    this.newProduct();
    this.findAllOrder()
  }
  
  findAll(){
    this.subscriptions.push(this.productService.findAll().subscribe(response => {
      this.products = response;
    }));
  }

  findAllOrder(){
    this.subscriptions.push(this.orderService.findAll().subscribe(response => {
      this.orders = response;
    }));
  }

  newProduct(){
    this.productNew = new Product();
    this.productNew.name="";
    this.productNew.status="active";
    this.productNew.category="";
    this.productNew.price=0;
    
    
  }

  save(){
    if(this.productNew.name.trim()==""){
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Must enter name field', life: 3000});
     return;
    }
    if(this.productNew.category.trim()==""){
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Must enter name category', life: 3000});
     return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subscriptions.push(this.productService.save(this.productNew).subscribe(response => {
          this.newProduct();
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product has been added', life: 3000});
          this.findAll();
        }));

      }
  });

   
  }
}
