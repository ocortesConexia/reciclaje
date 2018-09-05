import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReportarPage } from '../pages/reportar/reportar';
import { ReciclaPage } from '../pages/recicla/recicla';
import { QuejasPage } from '../pages/quejas/quejas';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GameComponent } from '../pages/game/game';
import { InformaciNPage } from '../pages/informaci-n/informaci-n';
import { SubirIncidentePage } from '../pages/subir-incidente/subir-incidente';
import { OrdinariosPage } from '../pages/ordinarios/ordinarios';
import { PapelCartonPage } from '../pages/papel-carton/papel-carton';
import { PlSticoPage } from '../pages/pl-stico/pl-stico';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameService } from '../Services/game.service';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { LoadingProvider } from '../Services/loading/loading';
import { AlertsProvider } from '../Services/alerts/alerts';
//import { CameraProvider } from '../Services/camera/camera';
import { DatabaseProvider } from '../Services/database/database';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { FirebaseAuthService } from '../Services/auth/firebase';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@NgModule({
  declarations: [
    MyApp,
    ReportarPage,
    ReciclaPage,
    QuejasPage,
    TabsControllerPage,
    GameComponent,
    InformaciNPage,
    SubirIncidentePage,
    OrdinariosPage,
    PapelCartonPage,
    PlSticoPage,
    ComentariosPage,
    LoginPage,
    ProgressBarComponent,
    GameComponent,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire,"reciclaje"),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportarPage,
    ReciclaPage,
    QuejasPage,
    TabsControllerPage,
    GameComponent,
    InformaciNPage,
    SubirIncidentePage,
    OrdinariosPage,
    PapelCartonPage,
    PlSticoPage,
    ComentariosPage,
    LoginPage,
    GameComponent,
    RegisterPage
  ],
  providers: [
    StatusBar,
    GameService,
    SplashScreen,
    LoadingProvider,
    AlertsProvider,
    AngularFireAuth,
    FirebaseAuthService,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}