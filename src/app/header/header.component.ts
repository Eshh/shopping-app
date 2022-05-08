import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private sub: Subscription;
  public isLoggedIn: boolean = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.sub = this.authService.user.subscribe((user: any) => {
      this.isLoggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onSaveData() {
    this.dataStorageService.storeRecipies();
  }

  onLogout() {
    this.authService.signOut();
  }

  getRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
