import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { StructuralDirectiveAttribute } from './directives/structural-directive-attribute/structural-directive-attribute';
import { StructuralDirectiveNgForVsFor } from './directives/structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for';
import { SignalLinked } from './Signals/signal-linked/signal-linked';
import { SignalWritable } from './Signals/signal-writable/signal-writable';
import { User } from './user/user';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: User }, // Assuming User component is the main component
    { path: 'user', component: User }, // Assuming User component is the main component
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'signal/linked', component: SignalLinked },
    { path: 'signal/writer', component: SignalWritable },
    // { path: 'profile', component: ProfileComponent },
    { path: 'data-binding', component: DataBinding },
    { path: 'structural-directive', component: StructuralDirectiveNgForVsFor },
    { path: 'attribute-directive', component: StructuralDirectiveAttribute },
    // { path: 'built-in-pipes', component: BuiltInPipesComponent },
    // { path: 'tdf', component: TemplateDrivenFormComponent },
    // { path: 'rf', component: ReactiveFormComponent },
    // { path: 'crud', component: CRUDComponent },
    // { path: 'adduser', component: AddUserComponent },
    // { path: 'updateuser/:id', component: UpdateUserComponent },
    // { path: 'viewuser/:id', component: ViewUserComponent },
    // { path: 'resourceapi', component: ResourceApiComponent },
    // { path: 'reusable', component: ReusableComponent },
    // { path: 'parent', component: ParentComponent },
    // { path: 'storage', component: StorageComponent },
    { path: '**', component: PageNotFound }
];
