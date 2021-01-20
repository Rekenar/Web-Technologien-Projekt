import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"

import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule }from '@angular/material/table'
import { MatSortModule }from '@angular/material/sort'
import { MatPaginatorModule }from '@angular/material/paginator'
import { MatIconModule} from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav'


@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSidenavModule
    ],
    exports: [
            CommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatCardModule,
            MatInputModule,
            MatToolbarModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatIconModule,
            MatSidenavModule
        ]
})

export class CustomMaterialModule {}