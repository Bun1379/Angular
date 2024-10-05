import { Routes } from '@angular/router';
import { HomeComponent } from './test/home/home.component';
import { StopwatchComponent } from './test/stopwatch/stopwatch.component';
import { CurrentClockComponent } from './test/current-clock/current-clock.component';
import { PercentageCalculatorComponent } from './test/percentage-calculator/percentage-calculator.component';
import { PalindromeCheckerComponent } from './test/palindrome-checker/palindrome-checker.component';
import { TodoListComponent } from './test/todo-list/todo-list.component';
import { ColorPickerComponent } from './test/color-picker/color-picker.component';
import { TextFormatterComponent } from './test/text-formatter/text-formatter.component';
import { RandomArrayDisplayComponent } from './test/random-array-display/random-array-display.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stopwatch', component: StopwatchComponent },
    { path: 'current-clock', component: CurrentClockComponent },
    { path: 'percentage-calculator', component: PercentageCalculatorComponent },
    { path: 'palindrome-checker', component: PalindromeCheckerComponent },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'color-picker', component: ColorPickerComponent },
    { path: 'text-formatter', component: TextFormatterComponent },
    { path: 'random-array-display', component: RandomArrayDisplayComponent }
];
