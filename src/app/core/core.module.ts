// Imports Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { FormsModule } from '@angular/forms';

// components
@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    BookCardsComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    BookCardsComponent
  ]
})
export class CoreModule { }
