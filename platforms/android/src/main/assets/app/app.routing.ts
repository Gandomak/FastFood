import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import {FirstPageComponent} from "./pages/firstpage/firstpage.component";

export const routes = [
   { path: "", component: FirstPageComponent },
  { path: "list", component: ListComponent },
  { path: "login", component: LoginComponent }
];

export const navigatableComponents = [
 LoginComponent,
 LoginComponent,
  ListComponent
];