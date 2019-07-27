import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SalaryTaxPipe } from './salary-tax.pipe';
import { HighlightDirective } from './highlight.directive';
import { MyLoopDirective } from './my-loop.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { UserListComponent } from './user-list/user-list.component';
import { Parent1Component } from './comp-interaction/parent1/parent1.component';
import { Child1Component } from './comp-interaction/child1/child1.component';
import { Parent2Component } from './comp-interaction/parent2/parent2.component';
import { Child2Component } from './comp-interaction/child2/child2.component';
import { Child3Component } from './comp-interaction/child3/child3.component';
import { Parent3Component } from './comp-interaction/parent3/parent3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'form1', component: TemplateDrivenFormComponent},
  {path: 'form2', component: ReactiveFormComponent},
  {path: 'p2c', component: Parent1Component},
  {path: 'c2p1', component: Parent2Component},
  {path: 'c2p2', component: Parent3Component},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({ //decorator - metadata
  declarations: [
    AppComponent,
    EmpComponent,
    DeptComponent,
    TwoWayComponent,
    PipeDemoComponent,
    SalaryTaxPipe,
    HighlightDirective,
    MyLoopDirective,
    StructuralDirectiveComponent,
    UserListComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Child3Component,
    Parent3Component,
    PageNotFoundComponent,
    UserDetailsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
