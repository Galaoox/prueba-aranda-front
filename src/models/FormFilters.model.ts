export class FormFilters {
    field: string;
    search: string;
    order: string;

    constructor(field: string = '', search: string = '', order: string = '') {
        this.field = field;
        this.search = search;
        this.order = order;
    }

}