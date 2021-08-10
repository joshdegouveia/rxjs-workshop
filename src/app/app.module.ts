import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { OperatorExamplesComponent } from './operator-examples/operator-examples.component';
import { FromEventExampleComponent } from './from-event-example/from-event-example.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: OperatorExamplesComponent },
      { path: 'from-event', component: FromEventExampleComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    OperatorExamplesComponent,
    FromEventExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
