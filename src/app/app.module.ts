// External Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

// Routing, Styling, Environment
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';

// Component Modules
import { AppComponent } from './app.component';
import { PlayModule } from './play/play.module';
import { LoginModule } from './login/login.module';
import { ManageModule } from './manage/manage.module';
import { BuildModule } from './build/build.module';

// Authentication
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { DatabaseModule } from './database/database.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    LoginModule,
    PlayModule,
    ManageModule,
    BuildModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    DatabaseModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
