import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SocketsProvider } from '../providers/sockets/sockets';

import { ImagesProvider } from '../providers/images/images';
import { PreloaderProvider } from '../providers/preloader/preloader';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SocketsProvider,
    ImagesProvider,
    PreloaderProvider
  ]
})
export class AppModule { }
