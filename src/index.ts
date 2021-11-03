// Intellij 2019.2.3 throw error ', expected', its 'import' module doesn't support TypeScript Type-Only import syntax
// Latest Intellij 2021.2.3 works fine with no warning.
export type { Student } from './types';
import type { Teacher } from './types';
import { HeadMaster } from './types';

let englishTeacher: Teacher;
if (englishTeacher == null) {
	console.log(null);
}

let head: HeadMaster;
if (head == null) {
	console.log(null);
}
