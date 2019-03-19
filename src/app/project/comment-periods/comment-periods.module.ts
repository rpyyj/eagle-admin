import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

// components
import { CommentPeriodsComponent } from './comment-periods.component';

// modules
import { SharedModule } from 'app//shared/shared.module';
import { CommentPeriodTableRowComponent } from './comment-period-table-row/comment-period-table-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    CommentPeriodsComponent,
    CommentPeriodTableRowComponent
  ],
  entryComponents: [
    CommentPeriodsComponent,
    CommentPeriodTableRowComponent
  ]
})
export class CommentPeriodsModule { }
