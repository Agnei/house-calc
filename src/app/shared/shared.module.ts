import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HandlersModule } from './handlers/handlers.module';
import { InterceptorsModule } from './interceptors/interceptors.module';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        HandlersModule,
        InterceptorsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        HandlersModule,
        InterceptorsModule
    ]

})
export class SharedModule { }
