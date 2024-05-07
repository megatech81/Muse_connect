import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

export const routes: Routes = [
	{
		path: '', redirectTo:'signup' , pathMatch:'full'
	},
	{
		path:'signup' ,
		component:SignupComponent
	},
	{
		path: '',
		component:UserListComponent,
		children:[
			{
				path:'chatwindow',
				component:ChatWindowComponent
			}
		]
	}
];
