import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MainNavigationComponent } from './header/main-navigation/main-navigation.component';
import { MenuComponent } from './header/menu/menu.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { BrandsComponent } from './brands/brands.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    HeaderMainComponent,
    MainNavigationComponent,
    MenuComponent,
    ShopComponent,
    ShopSidebarComponent,
    ShopContentComponent,
    RecentlyViewedComponent,
    BrandsComponent,
    NewslatterComponent,
    FooterComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
