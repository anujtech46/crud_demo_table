/**
 * In this todo class definition, we specify that each
 * Todo instance will have three properties.
 * id: number, unique ID of the todo item
 * title: string, title of the todo item
 * complete: boolean whether or not the todo item
 * is complete
 */

export class Todo {
    id: number;
    // tslint:disable-next-line:no-inferrable-types
    title: string = '';
    // tslint:disable-next-line:no-inferrable-types
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
